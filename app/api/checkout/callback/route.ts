import { PaymentCallbackData, PaymentRequestBody } from "@/@types/liqpay";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/prisma/prisma-client";
import { OrderStatus } from "@prisma/client";

const LIQPAY_PRIVATE_KEY = process.env.LIQPAY_PRIVATE_KEY!;

export async function POST(req: NextRequest) {
  try {
    const bodyText = await req.text();
    const params = new URLSearchParams(bodyText);
    const data = params.get("data");
    const requestSignature = params.get("signature");
    if (!data || !requestSignature) {
      return NextResponse.json({ error: "Missing data or signature" }, { status: 400 });
    }

    const signature = crypto
      .createHash("sha1")
      .update(LIQPAY_PRIVATE_KEY + data + LIQPAY_PRIVATE_KEY)
      .digest("base64");

    if (signature !== requestSignature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    const body = JSON.parse(Buffer.from(data, "base64").toString("utf-8")) as PaymentCallbackData;
    const order = await prisma.order.findFirst({
      where: {
        id: Number(body.order_id),
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" });
    }

    const isSucceeded = body.status === "success";

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELLED,
      },
    });

    if (isSucceeded) {
      const userCart = await prisma.cart.findFirst({
        include: {
          user: true,
          items: {
            include: {
              ingredients: true,
              productItem: {
                include: {
                  product: true,
                },
              },
            },
          },
        },
        where: {
          token: order.token,
        },
      });

      // If cart not found return error
      if (!userCart) {
        throw new Error("Cart is empty");
      }

      // If cart is empty return error
      if (userCart?.totalAmount === 0) {
        throw new Error("Cart is empty");
      }

      await prisma.cart.update({
        data: {
          totalAmount: 0,
        },
        where: {
          id: userCart.id,
        },
      });

      // Delete cartItems
      await prisma.cartItem.deleteMany({
        where: {
          cartId: userCart.id,
        },
      });
    }

    return NextResponse.json({ success: true, data: body });
  } catch (error) {
    console.error("Error while execution checkout-callback:", error);
    return NextResponse.json("Error", { status: 500 });
  }
}

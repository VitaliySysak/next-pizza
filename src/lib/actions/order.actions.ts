"use server";

import { prisma } from "@/prisma/prisma-client";
import { CheckoutFormValues } from "../utils";
import { OrderStatus } from "@prisma/client";
import { cookies } from "next/headers";
import { createPaymentLink } from "../create-payment-link";
import { getCartItemDetails } from "@/src/lib";
import { CartStateItem } from "@/src/lib/get-cart-details";
import { PizzaSize, PizzaType } from "@/src/constants/pizza";

export async function createOrder(data: CheckoutFormValues, items: CartStateItem[]) {
  try {
    const cookieStore = cookies();
    const cartToken = cookieStore.get("cartToken")?.value;

    // If cart token not found return error
    if (!cartToken) {
      throw new Error("Cart token not found");
    }

    // Search Cart by token
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
        token: cartToken,
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

    // Create order
    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName.concat(" ", data.lastName),
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    });

    const description =
      items
        .map(
          (item) =>
            item.name +
            (item.pizzaSize
              ? " Pizza: " + getCartItemDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize)
              : "")
        )
        .join(";\n") + ";";

    // Create payment url
    const paymentUrl = createPaymentLink({
      amount: order.totalAmount,
      orderId: order.id,
      description,
    });

    // If payment url not found return error
    if (!paymentUrl) {
      throw new Error("Payment url not found");
    }

    // Write payment order id
    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        paymentId: order.id,
      },
    });

    return paymentUrl;
  } catch (error) {
    console.error("Error while execution createOrder:", error);
  }
}

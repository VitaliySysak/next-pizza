import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const orderId = searchParams.get("paid");

  console.log("paidOrderId:", orderId);

  if (!orderId) {
    return NextResponse.json({ error: "No order ID provided" }, { status: 400 });
  }

  const order = await prisma.order.findFirst({
    where: { id: Number(orderId) },
  });

  if (!order) {
    return NextResponse.json({ status: "not_found" });
  }

  console.log(order)

  return NextResponse.json({ status: order.status });
}

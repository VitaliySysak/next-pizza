import { PaymentCallbackData } from "@/@types/liqpay";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

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

    const decodedData = JSON.parse(Buffer.from(data, "base64").toString("utf-8"));
    console.log("Decoded LiqPay Data:", decodedData);

    return NextResponse.json({ success: true, data: decodedData });
  } catch (error) {
    console.log("Error while execution checkout-callback:", error);
    return NextResponse.json("Error", { status: 500 });
  }
}

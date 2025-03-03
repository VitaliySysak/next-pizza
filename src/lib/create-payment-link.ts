import crypto from "crypto";
import { CreatePaymentLinkProps, PaymentData } from "@/@types/liqpay";

const { LIQPAY_PRIVATE_KEY, LIQPAY_PUBLIC_KEY, LIQPAY_RESULT_CALLBACK_URL, LIQPAY_SERVER_CALLBACK_URL } = process.env;

export const createPaymentLink = ({ amount, orderId, description }: CreatePaymentLinkProps) => {
  const paymentData: PaymentData = {
    version: 3,
    public_key: LIQPAY_PUBLIC_KEY!,
    action: "pay",
    amount: amount,
    currency: "UAH",
    description: description,
    order_id: orderId,
    result_url: LIQPAY_RESULT_CALLBACK_URL!,
    server_url: LIQPAY_SERVER_CALLBACK_URL!,
  };

  const data = Buffer.from(JSON.stringify(paymentData)).toString("base64");
  const signature = crypto
    .createHash("sha1")
    .update(LIQPAY_PRIVATE_KEY + data + LIQPAY_PRIVATE_KEY)
    .digest("base64");
  return `https://www.liqpay.ua/api/3/checkout?data=${data}&signature=${signature}`;
};

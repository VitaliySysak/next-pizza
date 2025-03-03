export interface PaymentData {
  version: number
  public_key: string
  action: "pay" 
  amount: number
  currency: "UAH" | "USD" | "EUR"
  description: string
  order_id: number
  result_url: string
  server_url: string
}

export interface CreatePaymentLinkProps {
  amount: number;
  orderId: number;
  description: string;
}

export type PaymentCallbackData = {
  data: string,
  signature: string,
  base64_encode: string,
  sha1: string
}
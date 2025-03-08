export interface PaymentData {
  version: number;
  public_key: string;
  action: "pay";
  amount: number;
  currency: "UAH" | "USD" | "EUR";
  description: string;
  order_id: number;
  result_url: string;
  server_url: string;
}

export interface CreatePaymentLinkProps {
  amount: number;
  orderId: number;
  description: string;
}

export interface PaymentRequestBody {
  signature: string;
  data: string;
}

export type PaymentCallbackData = {
  payment_id: number;
  action: "pay";
  status: "success" | "error" | "failture" | "reversed";
  version: number;
  type: string;
  paytype: "card" | "bank";
  public_key: string;
  acq_id: number;
  order_id: string;
  liqpay_order_id: string;
  description: string;
  sender_first_name: string;
  sender_last_name: string;
  sender_card_mask2: string;
  sender_card_bank: string;
  sender_card_type: string;
  sender_card_country: number;
  ip: string;
  amount: number;
  currency: string;
  sender_commission: number;
  receiver_commission: number;
  agent_commission: number;
  amount_debit: number;
  amount_credit: number;
  commission_debit: number;
  commission_credit: number;
  currency_debit: string;
  currency_credit: string;
  sender_bonus: number;
  amount_bonus: number;
  mpi_eci: string;
  is_3ds: boolean;
  language: string;
  create_date: number;
  end_date: number;
  transaction_id: number;
};

import { OrderStatus } from "@prisma/client";
import { axiosInstance } from "./axios-instance";

export const getPaidInfo = async (id: number): Promise<{ status: OrderStatus }> => {
  return (await axiosInstance.get("/checkout/paid?paid=" + id)).data;
};

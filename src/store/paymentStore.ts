import type { Cake } from "@mocks/orderMock";
import { atom } from "nanostores";

export interface PaymentInfo {
  name: string;
  cel: string;
  comments: string;
  paymentType: "cel" | "name" | "comments" | "paymentType";
  orderNumber: number;
  order: Cake[];
}

const paymentDataInitialState = {
  name: "",
  cel: "",
  comments: "",
  paymentType: "",
  orderNumber: 0,
  order: [],
};
export const paymentData = atom(paymentDataInitialState);

export const clearPaymentData = () => {
  return paymentData.set(paymentDataInitialState);
};

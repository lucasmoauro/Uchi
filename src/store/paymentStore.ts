import { atom } from "nanostores";

export interface PaymentInfo {
  name: string;
  cel: string;
  comments: string;
  paymentType: "cel" | "name" | "comments" | "paymentType";
}

const paymentDataInitialState = {
  name: "",
  cel: "",
  comments: "",
  paymentType: "",
};
export const paymentData = atom(paymentDataInitialState);

export const clearPaymentData = () => {
  return paymentData.set(paymentDataInitialState);
};

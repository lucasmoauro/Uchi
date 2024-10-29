import type { Cake } from "@mocks/orderMock";
import { atom } from "nanostores";

export interface PaymentInfo {
  name: string;
  cel: number;
  comments: string;
  paymentType: "cel" | "name" | "comments" | "paymentType";
  orderNumber: number;
  order: Cake[];
}

export const paymentData = atom({});

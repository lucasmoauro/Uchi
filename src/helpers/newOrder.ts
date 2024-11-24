import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import type { Cake } from "@mocks/orderMock";

const ref = collection(db, "clientes");

interface PaymentInfo {
  name: string;
  cel: string;
  comments: string;
  paymentType: string;
}

export const newOrder = async (
  $paymentData: PaymentInfo,
  order: Cake[],
  totalPrice: string,
) => {
  const timestamp = new Date().getTime();

  const date = new Date(timestamp).toLocaleDateString();

  const { cel, comments, name, paymentType } = $paymentData;

  await addDoc(ref, {
    date,
    name,
    cel,
    comments,
    paymentType,
    order,
    totalPrice,
  });
};

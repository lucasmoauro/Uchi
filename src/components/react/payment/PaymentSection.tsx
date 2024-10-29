import { useStore } from "@nanostores/react";
import { PaymentForm } from "./PaymentForm";
import { useEffect } from "react";
import { paymentData, type PaymentInfo } from "@store/paymentStore";

const order = 545454;
export const PaymentSection = () => {
  const $paymentData = useStore(paymentData);

  useEffect(() => {
    paymentData.set({ ...$paymentData, orderNumber: order } as PaymentInfo);
  }, []);
  return (
    <section className="bg-primary shadow-3xl w-11/12 md:w-8/12 lg:w-5/12 mt-6 rounded text-accent">
      <h1 className="text-3xl font-semibold text-center py-3">
        Pedido N°54545
      </h1>

      <PaymentForm />
    </section>
  );
};

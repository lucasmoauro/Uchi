import { useStore } from "@nanostores/react";
import { PaymentForm } from "./PaymentForm";
import { useEffect } from "react";
import { paymentData } from "@store/paymentStore";

export const PaymentSection = () => {
  const $paymentData = useStore(paymentData);

  useEffect(() => {
    paymentData.set({ ...$paymentData });
  }, []);

  return (
    <section className="bg-primary shadow-3xl w-11/12 md:w-8/12 lg:w-5/12 mt-6 rounded text-accent">
      <h1 className="text-3xl font-semibold text-center py-3">Nuevo Pedido</h1>

      <PaymentForm />
    </section>
  );
};

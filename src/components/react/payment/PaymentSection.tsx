import { useStore } from "@nanostores/react";
import { PaymentForm } from "./PaymentForm";
import { useEffect } from "react";
import {
  clearPaymentData,
  paymentData,
  type PaymentInfo,
} from "@store/paymentStore";

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
      {/* /!! BORRAR FORM Y CONECTAR A FB */}
      <div className="flex justify-around">
        <button
          className={`px-5 py-2 mb-3 mr-3 text-3xl text-accent border-2 rounded hover:border-accent hover:bg-accent/10 transition-all delay-75 ease-in-out duration-300`}
          onClick={clearPaymentData}
        >
          Borrar
        </button>
        <button
          className={`px-5 py-2 mb-3 mr-3 bg-secondary text-3xl text-primary rounded shadow-3xl hover:bg-[#B3B770]`}
        >
          Pagar
        </button>
      </div>
    </section>
  );
};

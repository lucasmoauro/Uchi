import { useStore } from "@nanostores/react";
import { PaymentForm } from "./PaymentForm";
import { useEffect } from "react";
import { clearPaymentData, paymentData } from "@store/paymentStore";
import { newOrder } from "helpers/newOrder";
import { cartItems, clearCartData } from "@store/cartStore";
import { popUp } from "helpers/alerts/popUp";

export const PaymentSection = () => {
  const $paymentData = useStore(paymentData);
  const $cartItems = useStore(cartItems);

  const addNewOrder = async () => {
    const totalPrice = cartItems
      .get()
      .reduce((acc, el) => acc + el.currentPrice!, 0)
      .toString();

    const order = $cartItems;

    try {
      // await newOrder($paymentData, order, totalPrice);
    } catch (error) {
    } finally {
      popUp({
        title: "Pedido realizado!",
        icon: "success",
        text: `Precio del pedido: $${totalPrice}`,
        confirmButtonText: "Ir a whatsapp",
        cancelButtonText: "Ver instrucciones",
        name: $paymentData.name,
      });
      clearPaymentData();
      clearCartData();
    }
  };

  useEffect(() => {
    paymentData.set({ ...$paymentData });
  }, []);

  return (
    <section className="bg-primary shadow-3xl w-11/12 md:w-8/12 lg:w-5/12 mt-6 rounded text-accent">
      <h1 className="text-3xl font-semibold text-center py-3">Nuevo Pedido</h1>

      <PaymentForm />

      <div className="flex justify-around">
        <button
          className={`px-5 py-2 mb-3 mr-3 text-3xl text-accent border-2 rounded hover:border-accent hover:bg-accent/10 transition-all delay-75 ease-in-out duration-300`}
          onClick={clearPaymentData}
        >
          Borrar
        </button>
        <button
          className={`px-5 py-2 mb-3 mr-3 bg-secondary text-3xl text-primary rounded shadow-3xl hover:bg-[#B3B770]`}
          onClick={addNewOrder}
        >
          Pagar
        </button>
      </div>
    </section>
  );
};

import {
  clearPaymentData,
  paymentData,
  type PaymentInfo,
} from "@store/paymentStore";
import { PaymentField } from "./PaymentField";
import { PaymentMethod } from "./PaymentMethod";
import { useStore } from "@nanostores/react";
import { cartItems, clearCartData } from "@store/cartStore";
import { popUp, popUpAlert } from "helpers/alerts/popUp";
import { newOrder } from "helpers/newOrder";
import type React from "react";

type paymentOptions = {
  label: string;
};

export type inputField = {
  name: string;
  placeholder: string;
  type: string;
  paymentDataInput: string;
};

const inputFieldType: inputField[] = [
  {
    name: "Nombre",
    placeholder: "Pedro Gimenez",
    type: "text",
    paymentDataInput: "name",
  },
  {
    name: "telefono",
    placeholder: "099 999 999",
    type: "tel",
    paymentDataInput: "cel",
  },
];

const paymentOptions: paymentOptions[] = [
  {
    label: "efectivo",
  },
  {
    label: "transferencia",
  },
  {
    label: "abitab",
  },
];

export const PaymentForm = () => {
  const $paymentData = useStore(paymentData);
  const $cartItems = useStore(cartItems);

  const updatePaymentData = (field: keyof PaymentInfo, value: any) => {
    paymentData.set({
      ...$paymentData,
      [field]: value,
    });
  };

  const addNewOrder = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!$cartItems.length) {
      popUpAlert({
        title: "Pedido realizado!",
        icon: "error",
        text: `¡Ups! Necesitas agregar tortas o postres al carrito para continuar.`,
        confirmButtonText: "Descubre nuestras tortas",
      });
      return;
    }
    const totalPrice = cartItems
      .get()
      .reduce((acc, el) => acc + el.currentPrice!, 0)
      .toString();

    const order = $cartItems;

    await newOrder($paymentData, order, totalPrice);
    popUp({
      title: "Pedido realizado!",
      icon: "success",
      text: `Precio del pedido: $${totalPrice}`,
      confirmButtonText: "Volver al inicio e ir a whatsapp",
      cancelButtonText: "Ver instrucciones",
      name: $paymentData.name,
    });
    clearPaymentData();
    clearCartData();
  };

  return (
    <form className="px-4 md:px-6">
      <div>
        <div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 ">
            {inputFieldType.map((input) => (
              <PaymentField
                updatePaymentData={updatePaymentData}
                name={input.name}
                placeholder={input.placeholder}
                paymentDataInput={input.paymentDataInput}
                type={input.type}
                key={input.name}
                formName={$paymentData.name}
                formCel={$paymentData.cel}
              />
            ))}
          </div>

          <div className="col-span-full mt-5">
            <label
              htmlFor="about"
              className="block text-2xl font-medium leading-6 text-accent"
            >
              Comentarios
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                value={$paymentData.comments}
                rows={3}
                placeholder="Dejame algunos comentarios o indicaciones sobre tu pedido."
                onChange={(e) =>
                  updatePaymentData("comments", e.target.value.trim())
                }
                className="block w-full resize-none rounded-md overflow-y-auto border-0 py-1.5 pl-3 bg-primary font-medium text-accent shadow-md ring-1 ring-inset ring-accent/45 placeholder:text-accent focus:ring-2 focus:ring-inset focus:ring-accent focus:outline-none sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8">
        <div className="mt-10">
          <fieldset>
            <legend className="text-2xl font-medium leading-6 text-accent">
              Forma de pago*
            </legend>
            <div className="mt-6">
              <div className="w-full flex items-center justify-between md:justify-around">
                {paymentOptions.map((option) => (
                  <PaymentMethod
                    label={option.label}
                    key={option.label}
                    updatePaymentData={updatePaymentData}
                    formPayment={$paymentData.paymentType}
                  />
                ))}
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      <div className="flex justify-around">
        <button
          className={`px-5 py-2 mb-3 mr-3 text-3xl text-accent border-2 rounded hover:border-accent hover:bg-accent/10 transition-all delay-75 ease-in-out duration-300`}
          onClick={clearPaymentData}
        >
          Borrar
        </button>
        <button
          className={`px-5 py-2 mb-3 mr-3 bg-secondary text-3xl text-primary rounded shadow-3xl hover:bg-[#B3B770]`}
          onClick={(e) => addNewOrder(e)}
          type="submit"
        >
          Pagar
        </button>
      </div>
    </form>
  );
};

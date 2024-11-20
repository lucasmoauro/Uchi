import { paymentData, type PaymentInfo } from "@store/paymentStore";
import { PaymentField } from "./PaymentField";
import { PaymentMethod } from "./PaymentMethod";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";

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

  const updatePaymentData = (field: keyof PaymentInfo, value: any) => {
    paymentData.set({
      ...$paymentData,
      [field]: value,
    });
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
                onChange={(e) => updatePaymentData("comments", e.target.value)}
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
              Forma de pago
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
    </form>
  );
};

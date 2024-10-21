import { PaymentField } from "./PaymentField";
import { PaymentMethod } from "./PaymentMethod";

type paymentOptions = {
  label: string;
};

export type inputField = {
  name: string;
  placeholder: string;
  type: string;
};

const inputFieldType: inputField[] = [
  {
    name: "Nombre",
    placeholder: "Pedro Gimenez",
    type: "text",
  },
  {
    name: "telefono",
    placeholder: "099 999 999",
    type: "tel",
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
  return (
    <form className="px-6">
      <div>
        <div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {inputFieldType.map((input) => (
              <PaymentField
                name={input.name}
                placeholder={input.placeholder}
                type={input.type}
                key={input.name}
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
                rows={3}
                placeholder="Dejame algunos comentarios o indicaciones sobre tu pedido."
                className="block w-9/12 resize-none rounded-md overflow-y-auto border-0 py-1.5 pl-3 bg-primary font-medium text-accent shadow-md ring-1 ring-inset ring-accent/45 placeholder:text-accent focus:ring-2 focus:ring-inset focus:ring-accent focus:outline-none sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-12">
        <div className="mt-10">
          <fieldset>
            <legend className="text-2xl font-medium leading-6 text-accent">
              Forma de pago
            </legend>
            <div className="mt-6">
              <div className="w-8/12  flex items-center justify-between">
                {paymentOptions.map((option) => (
                  <PaymentMethod label={option.label} key={option.label} />
                ))}
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </form>
  );
};

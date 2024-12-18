import type { inputField } from "./PaymentForm";
import { type PaymentInfo } from "@store/paymentStore";

interface Props extends inputField {
  updatePaymentData: (field: keyof PaymentInfo, value: any) => void;
  formName: string;
  formCel: string;
}

export const PaymentField = ({
  name,
  placeholder,
  type,
  paymentDataInput,
  updatePaymentData,
  formCel,
  formName,
}: Props) => {
  return (
    <div className="sm:col-span-1">
      <label
        htmlFor={name}
        className="block text-2xl font-medium leading-6 text-accent capitalize after:content-['*']"
      >
        {name}
      </label>
      <div className="mt-2">
        <div className="flex rounded-md shadow-md ring-1 ring-inset ring-accent/45 focus-within:ring-2 focus-within:ring-inset focus-within:ring-accent">
          <input
            required
            type={type}
            name={name}
            id={name}
            autoComplete="off"
            className="block flex-1 border-0 bg-transparent py-1.5 text-accent text-xl capitalize placeholder:text-accent focus:ring-0 sm:text-sm sm:leading-6 font-semibold focus:outline-none pl-3"
            placeholder={placeholder}
            value={paymentDataInput.includes("name") ? formName : formCel}
            onChange={(e) =>
              updatePaymentData(
                paymentDataInput as keyof PaymentInfo,
                e.target.value,
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

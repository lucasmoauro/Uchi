import type { PaymentInfo } from "@store/paymentStore";

interface Props {
  label: string;
  formPayment: string;
  updatePaymentData: (field: keyof PaymentInfo, value: any) => void;
}

export const PaymentMethod = ({
  label,
  formPayment,
  updatePaymentData,
}: Props) => {
  return (
    <div className="flex items-center gap-x-1 md:gap-x-3">
      <input
        id={label}
        name="payment"
        type="radio"
        value={formPayment}
        className="h-4 w-4 text-accent focus:ring-accent cursor-pointer"
        onChange={(e) => updatePaymentData("paymentType", label)}
      />
      <label
        htmlFor={label}
        className="text-lg md:text-xl font-medium text-accent capitalize cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

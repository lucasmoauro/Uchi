interface Props {
  label: string;
}

export const PaymentMethod = ({ label }: Props) => {
  return (
    <div className="flex items-center gap-x-1 md:gap-x-3">
      <input
        id={label}
        name="payment"
        type="radio"
        value={label}
        className="h-4 w-4 text-accent focus:ring-accent"
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

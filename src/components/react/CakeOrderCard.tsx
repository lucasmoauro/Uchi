import { OrderCounter } from "./OrderCounter";

interface Props {
  title: string;
  description: string;
  price: number;
}

export const CakeOrderCard = ({ title, description, price }: Props) => {
  return (
    <div className="bg-primary w-11/12 lg:w-9/12 min-h-[30rem] max-h-[32rem] rounded shadow-3xl pb-3 mb-6 relative text-accent flex flex-col items-center">
      <div className="h-48 rounded-t relative w-full">
        <img
          src="placeholder.jpeg"
          alt="placeholder"
          className="h-full w-full object-cover rounded-t"
        />
        <OrderCounter id={title} price={500} title={title} />
      </div>
      <div className="flex flex-col justify-center items-center px-4">
        <h2 className="text-2xl text-center font-semibold my-2">{title}</h2>

        <span className="text-xl lg:text-base font-medium text-pretty">
          {description}
        </span>
      </div>
      <span className="text-3xl font-bold py-2 absolute bottom-0">
        ${price}
      </span>
    </div>
  );
};

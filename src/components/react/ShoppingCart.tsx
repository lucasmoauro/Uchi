import { useState } from "react";
import { ShoppingCartTable } from "./ShoppingCartTable";
export interface Order {
  title: string;
  quantity: number;
  price: number;
}
const orderMock: Order[] = [
  {
    title: "Torta de frutilla",
    quantity: 3,
    price: 1500,
  },
  {
    title: "Torta de frutilla",
    quantity: 3,
    price: 1500,
  },
  {
    title: "Torta de frutilla",
    quantity: 3,
    price: 1500,
  },
  {
    title: "Torta de frutilla",
    quantity: 3,
    price: 1500,
  },
  {
    title: "Torta de frutilla",
    quantity: 3,
    price: 1500,
  },
];

export const ShoppingCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const changeCartStatus = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <section className="fixed bottom-0 w-full flex flex-col items-center justify-center h-10">
      <div
        className={`absolute bg-primary w-1/2 rounded-t shadow-3xl-inner grid grid-cols-2 bottom-0 ${isCartOpen ? "-translate-y-15" : "translate-y-[21.5rem]"}  transform delay-75 duration-500 ease-in-out`}
      >
        <section className="flex justify-around items-center col-span-2 my-3 h-30 w-full">
          <div className="col-span-1 flex justify-around items-center flex-1">
            <img src="src/icons/shoppingCart.svg" width={50} />
            <div className="flex flex-col text-2xl justify-center items-center text-accent font-semibold ">
              <span>3 Tortas</span>
              <span>$ 5000</span>
            </div>
          </div>
          <div className="flex items-center justify-around flex-1">
            <a
              href="/pedido/checkout"
              className={`px-5 py-2 bg-secondary text-3xl text-primary rounded shadow-3xl hover:bg-[#B3B770] ${isCartOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} transform delay-75 duration-500 ease-in-out`}
            >
              Pagar
            </a>

            {isCartOpen ? (
              <img
                src="src/icons/orderArrowUp.svg"
                className="cursor-pointer flex justify-end"
                width={35}
                onClick={changeCartStatus}
              />
            ) : (
              <img
                src="src/icons/orderArrowUp.svg"
                className="rotate-180 cursor-pointer flex justify-end"
                width={35}
                onClick={changeCartStatus}
              />
            )}
          </div>
        </section>

        {orderMock.length && <ShoppingCartTable orderMock={orderMock} />}

        <div className="w-full col-span-2 py-4 flex justify-end mt-1">
          <a
            href="/pedido/checkout"
            className={`px-5 py-2 mr-3 bg-secondary text-3xl text-primary rounded shadow-3xl hover:bg-[#B3B770] ${!isCartOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
          >
            Pagar
          </a>
        </div>
      </div>
    </section>
  );
};

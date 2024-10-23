import { useState } from "react";
import { ShoppingCartTable } from "./ShoppingCartTable";
import { orderMock } from "@mocks/orderMock";
import { useStore } from "@nanostores/react";
import { isCartOpen } from "@store/isCartOpen";

const ShoppingCart = () => {
  const $isCartOpen = useStore(isCartOpen);

  const changeCartStatus = () => {
    isCartOpen.set(!$isCartOpen);
  };

  return (
    <section className="fixed bottom-0 w-full flex flex-col items-center justify-center h-10">
      <div
        className={`absolute bg-primary w-11/12 md:w-6/12 rounded-t shadow-3xl-inner grid grid-cols-2 bottom-0 ${isCartOpen.value ? "-translate-y-15" : "translate-y-[21.5rem]"}  transform delay-75 duration-500 ease-in-out`}
      >
        <section className="flex justify-around items-center col-span-2 my-3 h-30 w-full">
          <div className="col-span-1 flex justify-around items-center flex-1">
            <img src="/shoppingCart.svg" width={50} />
            <div className="flex flex-col text-lg md:text-2xl justify-center items-center text-accent font-semibold ">
              <span>3 Tortas</span>
              <span>$ 5000</span>
            </div>
          </div>
          <div className="flex items-center justify-around flex-1">
            <a
              href="/pedido/checkout"
              className={`px-5 py-2 bg-secondary text-2xl md:text-3xl text-primary rounded shadow-3xl hover:bg-[#B3B770] ${isCartOpen.value ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} transform delay-75 duration-500 ease-in-out`}
            >
              Pagar
            </a>

            {isCartOpen.value ? (
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

        <div className="w-full col-span-2 py-1 md:py-4 flex justify-end mt-4 mb-2 md:mt-1">
          <a
            href="/pedido/checkout"
            className={`px-5 py-2 mr-3 bg-secondary text-2xl md:text-3xl text-primary rounded shadow-3xl hover:bg-[#B3B770] ${!isCartOpen.value ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
          >
            Pagar
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;

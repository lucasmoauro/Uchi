import type { Cake } from "@mocks/orderMock";
import { useStore } from "@nanostores/react";
import { addCartItem, cartItems, subtractCartItem } from "@store/cartStore";
import { useState } from "react";

export const OrderCounter = ({ id, price, title }: Cake) => {
  const $cartItems = useStore(cartItems);

  const [cake, setCake] = useState({
    id,
    price,
    title,
    quantity: 0,
  });

  const changeCakeNumber = (number: number, sign: string) => {
    if (sign.includes("-")) {
      if (cake.quantity <= 0) {
        return;
      }
      setCake({ ...cake, quantity: cake.quantity - number });
      subtractCartItem(cake);
    } else {
      setCake({ ...cake, quantity: cake.quantity + number });
      addCartItem(cake);
    }
  };

  return (
    <section className="absolute w-full flex justify-between top-0 pt-0.5 px-0.5">
      <div
        className="bg-primary rounded flex items-center justify-center cursor-pointer"
        onClick={() => changeCakeNumber(1, "-")}
      >
        <img src="/minus.svg" height={35} width={35} />
      </div>
      <div className="bg-primary h-10 w-10 rounded font-medium text-2xl flex items-center justify-center text-accent">
        {cake.quantity}
      </div>
      <div
        className="bg-primary h-10 w-10 rounded flex items-center justify-center cursor-pointer"
        onClick={() => changeCakeNumber(1, "+")}
      >
        <img src="/plus.svg" height={35} width={35} />
      </div>
    </section>
  );
};

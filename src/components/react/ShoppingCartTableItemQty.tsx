import { useEffect } from "react";
import {
  addCartItem,
  removeItemFromCart,
  subtractCartItem,
} from "@store/cartStore";

interface Props {
  quantity: number;
  title: string;
  id: string;
  price: number;
  path: string;
}

export const ShoppingCartTableItemQty = ({
  quantity,
  id,
  price,
  title,
  path,
}: Props) => {
  const changeCartItemQty = (type: string) => {
    if (quantity === 1 && type.includes("minus")) {
      removeItemFromCart({ id, price, title });
    } else if (type.includes("minus")) {
      subtractCartItem({ id, price, title });
    } else {
      addCartItem({ id, price, title });
    }
  };

  if (!path?.includes("checkout")) {
    return (
      <td className="flex-1 flex justify-center items-center font-semibold text-lg md:text-xl">
        {quantity}
      </td>
    );
  } else {
    return (
      <td className="flex-1 flex justify-center items-center font-semibold text-lg md:text-xl">
        <span
          className="mr-1 cursor-pointer"
          onClick={() => changeCartItemQty("minus")}
        >
          <img src="/minus.svg" width={25} />
        </span>
        {quantity}
        <span
          className="cursor-pointer"
          onClick={() => changeCartItemQty("plus")}
        >
          <img src="/plus.svg" width={25} />
        </span>
      </td>
    );
  }
};

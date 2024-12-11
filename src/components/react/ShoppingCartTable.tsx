import { cartItems } from "@store/cartStore";
import { useStore } from "@nanostores/react";
import { ShoppingCartTableRow } from "./ShoppingCartTableRow";
import { useEffect, useState } from "react";

interface Props {
  path?: string;
}
export const ShoppingCartTable = ({ path = "" }: Props) => {
  const $cartItems = useStore(cartItems);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = $cartItems.reduce(
      (acc, cartItem) => acc + cartItem.currentPrice!,
      0,
    );
    setTotalPrice(total);
  }, [$cartItems]);

  return (
    <section
      className={`w-full col-span-3 md:mb-6 lg:mb-0 min-h-64 md:min-h-80 lg:min-h-64 relative`}
    >
      <table className="w-full col-span-3 flex-1 flex flex-col">
        <thead>
          <tr className="grid grid-cols-4 place-items-center col-span-4 text-lg md:text-xl">
            <td className="font-semibold text-secondary-accent">Producto</td>
            <td className="font-semibold text-secondary-accent">Cantidad</td>
            <td className="font-semibold text-secondary-accent">Precio</td>
            <td className="font-semibold text-secondary-accent">Acciones</td>
          </tr>
        </thead>
        <tbody
          className={`border-t-2 border-t-accent grid grid-cols-4 ${path.includes("checkout") ? "max-h-80 " : "max-h-52 md:max-h-44 lg:max-h-52"} mt-2 ${$cartItems.length > 4 && "overflow-y-auto"}`}
        >
          {!$cartItems.length ? (
            <tr className="col-span-4 text-accent text-xl lg:text-3xl font-bold min-h-52 flex items-center justify-center">
              <td>
                <span>No hay productos en su carrito</span>
              </td>
            </tr>
          ) : (
            $cartItems.map((cake) => (
              <ShoppingCartTableRow cake={cake} path={path} key={cake.id} />
            ))
          )}
        </tbody>
      </table>
      {path.includes("checkout") && (
        <span
          className={`text-2xl lg:text-3xl text-accent font-semibold flex justify-end px-6 absolute bottom-0 right-0 ${!$cartItems.length && "hidden"}`}
        >
          Total: ${totalPrice}
        </span>
      )}
    </section>
  );
};

import type { Cake } from "@mocks/orderMock";
import { removeItemFromCart } from "@store/cartStore";
import { ShoppingCartTableItemQty } from "./ShoppingCartTableItemQty";

interface Props {
  path: string;
  cake: Cake;
}

export const ShoppingCartTableRow = ({ cake, path }: Props) => {
  return (
    <tr
      className="col-span-4 pl-2 py-2 flex justify-between even:bg-secondary-accent/10 even:text-secondary-accent text-accent"
      key={cake.id}
    >
      <td className="flex-1 flex justify-center font-semibold  text-base md:text-lg">
        {cake.title}
      </td>
      <ShoppingCartTableItemQty
        title={cake.title}
        quantity={cake.quantity!}
        id={cake.id}
        price={cake.price}
        path={path}
      />
      <td className="flex-1 flex justify-center items-center font-semibold text-base md:text-lg">
        ${cake.currentPrice}
      </td>
      <td
        className="flex-1 flex justify-center cursor-pointer"
        onClick={() => removeItemFromCart(cake)}
      >
        <img src="/trashcan.svg" alt="" width={30} />
      </td>
    </tr>
  );
};

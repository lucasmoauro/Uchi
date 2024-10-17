import type { Order } from "@mocks/orderMock";
import { ShoppingCartTableItemQty } from "./ShoppingCartTableItemQty";

interface Props {
  orderMock: Order[];
  path?: string;
}
export const ShoppingCartTable = ({ orderMock, path = "" }: Props) => {
  return (
    <section
      className={`w-full col-span-3 min-h-64 ${orderMock.length ? "opacity-100" : "opacity-0"} transition delay-75 duration-300 ease-in-out`}
    >
      <table className="w-full col-span-3 flex-1 flex flex-col">
        <thead>
          <tr className="grid grid-cols-4 place-items-center col-span-4 pr-4">
            <td className="text-xl font-semibold text-secondary-accent">
              Producto
            </td>
            <td className="text-xl font-semibold text-secondary-accent">
              Cantidad
            </td>
            <td className="text-xl font-semibold text-secondary-accent">
              Precio
            </td>
            <td className="text-xl font-semibold text-secondary-accent">
              Acciones
            </td>
          </tr>
        </thead>
        {/* <hr className="" /> */}
        <tbody
          className={`border-t-2 border-t-accent  grid grid-cols-4 max-h-52 mt-2 ${orderMock.length > 5 ? "overflow-y-scroll" : "overflow-y-visible"}`}
        >
          {orderMock.map((item, i) => (
            <tr
              className="col-span-4 py-2 flex justify-between even:bg-secondary-accent/10 even:text-secondary-accent text-accent"
              key={i}
            >
              <td className="flex-1 flex justify-center font-semibold  text-lg">
                {item.title}
              </td>
              <ShoppingCartTableItemQty quantity={item.quantity} path={path} />
              <td className="flex-1 flex justify-center font-semibold text-lg">
                ${item.price}
              </td>
              <td className="flex-1 flex justify-center cursor-pointer">
                <img src="/trashcan.svg" alt="" width={30} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

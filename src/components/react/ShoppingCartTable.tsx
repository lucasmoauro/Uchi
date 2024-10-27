import type { Cake } from "@mocks/orderMock";
import { ShoppingCartTableItemQty } from "./ShoppingCartTableItemQty";

interface Props {
  cakeList: Cake[];
  path?: string;
}
export const ShoppingCartTable = ({ cakeList, path = "" }: Props) => {
  return (
    <section
      className={`w-full col-span-3 md:mb-6 lg:mb-0 min-h-64 md:min-h-80 lg:min-h-64 ${cakeList.length ? "opacity-100" : "opacity-0"} transition delay-75 duration-300 ease-in-out`}
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
          className={`border-t-2 border-t-accent grid grid-cols-4 ${path.includes("checkout") ? "max-h-80 lg:min-h-80" : "max-h-52 md:max-h-44 lg:max-h-52"} mt-2 ${cakeList.length > 4 && "overflow-y-auto"}`}
        >
          {cakeList.map((cake, i) => (
            <tr
              className="col-span-4 pl-2 py-2 flex justify-between even:bg-secondary-accent/10 even:text-secondary-accent text-accent"
              key={i}
            >
              <td className="flex-1 flex justify-center font-semibold  text-base md:text-lg">
                {cake.title}
              </td>
              <ShoppingCartTableItemQty quantity={cake.quantity} path={path} />
              <td className="flex-1 flex justify-center items-center font-semibold text-base md:text-lg">
                ${cake.price}
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

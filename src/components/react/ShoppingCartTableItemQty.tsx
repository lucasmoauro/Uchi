interface Props {
  quantity: number;
  path: string;
}

export const ShoppingCartTableItemQty = ({ quantity, path }: Props) => {
  if (!path?.includes("checkout")) {
    return (
      <td className="flex-1 flex justify-center items-center font-semibold text-xl">
        {quantity}
      </td>
    );
  } else {
    return (
      <td className="flex-1 flex justify-center items-center font-semibold text-xl">
        <span className="mr-1 cursor-pointer ">
          <img src="/minus.svg" width={25} />
        </span>
        {quantity}
        <span className="cursor-pointer">
          <img src="/plus.svg" width={25} />
        </span>
      </td>
    );
  }
};

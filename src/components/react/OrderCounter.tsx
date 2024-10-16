import { useEffect, useState } from "react";

interface Props {
  id: string;
}

export const OrderCounter = ({ id }: Props) => {
  const [cakeNumber, setCakeNumber] = useState(0);

  const changeCakeNumber = (number: number, sign: string) => {
    if (sign.includes("-")) {
      if (cakeNumber <= 0) {
        return;
      }
      setCakeNumber(cakeNumber - number);
    } else {
      setCakeNumber(cakeNumber + number);
    }
  };

  useEffect(() => {}, []);

  return (
    <section className="absolute w-full flex justify-between top-0 pt-0.5 px-0.5">
      <div
        className="bg-primary rounded flex items-center justify-center cursor-pointer"
        onClick={() => changeCakeNumber(1, "-")}
      >
        <img src="/minus.svg" height={35} width={35} />
      </div>
      <div className="bg-primary h-10 w-10 rounded font-medium text-2xl flex items-center justify-center">
        {cakeNumber}
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

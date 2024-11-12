import { useStore } from "@nanostores/react";
import { CakeFilter } from "./CakeFilter";
import { isFilterOpen } from "@store/isFilterOpen";

const listItems = [
  {
    title: "Chocolate",
  },
  {
    title: "Crema",
  },
  {
    title: "Dulce de Leche",
  },
];
export const Filter = () => {
  const $isFilterOpen = useStore(isFilterOpen);

  const changeFilterStatus = () => {
    isFilterOpen.set(!$isFilterOpen);
  };

  return (
    <div
      className={`fixed flex top-48 md:top-8  lg:block lg:relative lg:ml-10 lg:w-2/12 lg:left-0 z-50 ${$isFilterOpen ? "left-0" : "-left-64"} transition-[left] delay-75 duration-500 ease-in-out`}
    >
      <CakeFilter listItems={listItems} />
      <div
        className="bg-primary h-12 w-12 flex items-center justify-center rounded-r-md lg:hidden shadow-3xl"
        onClick={() => changeFilterStatus()}
      >
        <img
          src="/orderArrowUp.svg"
          alt="filtro"
          className={`h-8 ${$isFilterOpen ? "-rotate-90" : "rotate-90"}`}
        />
      </div>
    </div>
  );
};

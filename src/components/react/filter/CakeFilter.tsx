import { FilterListItem } from "./FilterListItem";

interface Props {
  listItems: ListItem[];
}

type ListItem = {
  title: string;
};

export const CakeFilter = ({ listItems }: Props) => {
  return (
    <div className="bg-primary w-full p-3 text-center shadow-3xl sticky top-28 z-50">
      <h3 className="text-2xl font-medium text-accent">Filtros y busqueda</h3>
      <hr className="my-2 bg-accent h-0.5 rounded-full" />

      <section className="flex flex-col justify-center items-center mt-3">
        <h3 className="text-2xl font-medium text-accent mb-2 self-start ml-4">
          Buscar
        </h3>

        <div className="w-11/12">
          <input
            type="text"
            placeholder="Buscar torta o postre"
            className="rounded-md bg-primary py-2 w-full shadow-3xl indent-2 placeholder-accent font-semibold text-accent"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-3">
        <h3 className="text-2xl font-medium text-accent mb-2 self-start ml-4">
          Filtros
        </h3>
        <ul className="flex flex-col items-start w-11/12">
          {listItems.map((listItem) => (
            <FilterListItem title={listItem.title} key={listItem.title} />
          ))}
        </ul>
      </section>
    </div>
  );
};

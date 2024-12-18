import { useStore } from "@nanostores/react";
import { CakeOrderCard } from "./CakeOrderCard";
import { filterStore } from "@store/filterStore";
import type { CollectionEntry } from "astro:content";
import { useEffect } from "react";
import { cartItems } from "@store/cartStore";

interface Props {
  tortas: CollectionEntry<"tortas">[];
}

export const CakeOrderList = ({ tortas }: Props) => {
  const $cakeFilter = useStore(filterStore);
  const $cartItems = useStore(cartItems);

  const cakeFiltered = tortas
    .filter((cake) =>
      cake.data.title
        .toLowerCase()
        .includes($cakeFilter.searchQuery.toLowerCase()),
    )
    .filter((cake) =>
      $cakeFilter.tags.every((selectedTag) =>
        cake.data.tags.some(
          (tag) => tag.toLowerCase() === selectedTag.toLowerCase(),
        ),
      ),
    );

  useEffect(() => {
    if (!$cartItems.length) {
      return;
    }
    sessionStorage.setItem("uchiPedido", JSON.stringify($cartItems));
  }, [$cartItems]);

  return (
    <section className="md:grid md:grid-cols-2 lg:grid-cols-3 place-items-center md:gap-10 flex-1 lg:ml-8">
      {cakeFiltered.map(({ data }: any) => (
        <CakeOrderCard
          key={data.title}
          title={data.title}
          description={data.description}
          price={data?.price || 500}
        />
      ))}
    </section>
  );
};

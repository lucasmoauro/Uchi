import { useStore } from "@nanostores/react";
import { cartItems } from "@store/cartStore";

export const ButtonCartCTA = () => {
  const $cartItems = useStore(cartItems);

  if (!$cartItems.length) {
    return <></>;
  } else {
    return (
      <a
        href="/pedido/checkout/pago"
        className={`px-5 py-2 mr-3 bg-secondary text-3xl text-primary rounded shadow-3xl hover:bg-[#B3B770]`}
      >
        Pagar
      </a>
    );
  }
};

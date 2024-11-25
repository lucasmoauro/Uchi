import type { Cake } from "@mocks/orderMock";
import { atom } from "nanostores";
import { isCartOpen } from "./isCartOpen";

const cartInitialState: Cake[] = [];

export const cartItems = atom<Cake[]>(cartInitialState);

type CakeInfo = Pick<Cake, "id" | "title" | "price" | "currentPrice">;

export const addCartItem = ({ id, price, title }: CakeInfo) => {
  const currentItems = cartItems.get();
  const itemIndex = currentItems.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    const updatedCart = [
      ...currentItems.slice(0, itemIndex),
      {
        ...currentItems[itemIndex],
        quantity: currentItems[itemIndex].quantity! + 1,
        currentPrice: currentItems[itemIndex].currentPrice! + price,
      },
      ...currentItems.slice(itemIndex + 1),
    ];
    cartItems.set(updatedCart);
  } else {
    cartItems.set([
      ...currentItems,
      { id, title, currentPrice: price, price, quantity: 1 },
    ]);
  }
};

export const subtractCartItem = ({ id, price }: CakeInfo) => {
  const currentItems = cartItems.get();
  const itemIndex = currentItems.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    const existingEntry = currentItems[itemIndex];

    if (existingEntry.quantity === 1) {
      const updatedCart = currentItems.filter((item) => item.id !== id);
      cartItems.set(updatedCart);
    } else {
      const updatedCart = [
        ...currentItems.slice(0, itemIndex),
        {
          ...existingEntry,
          quantity: existingEntry.quantity! - 1,
          currentPrice: currentItems[itemIndex].currentPrice! - price,
        },

        ...currentItems.slice(itemIndex + 1),
      ];
      cartItems.set(updatedCart);
    }
  }
};

export const removeItemFromCart = ({ id }: CakeInfo) => {
  const currentItems = cartItems.get();

  const updatedCart = currentItems.filter((item) => item.id !== id);

  if (!updatedCart.length) {
    isCartOpen.set(false);
  }
  cartItems.set(updatedCart);
};

export const clearCartData = () => {
  return cartItems.set(cartInitialState);
};

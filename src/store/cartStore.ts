import type { Cake } from "@mocks/orderMock";
import { atom } from "nanostores";

export const cartItems = atom<Cake[]>([]);

type CakeInfo = Pick<Cake, "id" | "title" | "price">;

export const addCartItem = ({ id, price, title }: CakeInfo) => {
  const currentItems = cartItems.get();
  const itemIndex = currentItems.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    const updatedCart = [
      ...currentItems.slice(0, itemIndex),
      {
        ...currentItems[itemIndex],
        quantity: currentItems[itemIndex].quantity! + 1,
      },
      ...currentItems.slice(itemIndex + 1),
    ];
    cartItems.set(updatedCart);
  } else {
    cartItems.set([...currentItems, { id, title, price, quantity: 1 }]);
  }
};

export const subtractCartItem = ({ id }: CakeInfo) => {
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
        { ...existingEntry, quantity: existingEntry.quantity! - 1 },
        ...currentItems.slice(itemIndex + 1),
      ];
      cartItems.set(updatedCart);
    }
  }
};

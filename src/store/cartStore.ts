import type { Cake } from "@mocks/orderMock";
import { map } from "nanostores";

export const cartItems = map<Record<string, Cake>>({});

type CakeInfo = Pick<Cake, "id" | "title" | "price">;

export const addCartItem = ({ id, price, title }: CakeInfo) => {
  const existingEntry = cartItems.get()[id];
  if (existingEntry) {
    cartItems.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity! + 1,
    });
  } else {
    cartItems.setKey(id, { id, title, price, quantity: 1 });
  }
};

export const subtractCartItem = ({ id, price, title }: CakeInfo) => {
  const existingEntry = cartItems.get()[id];

  if (existingEntry.quantity === 1) {
    const updatedCart = { ...cartItems.get() };
    delete updatedCart[id];
    cartItems.set(updatedCart);
    return;
  }

  if (existingEntry) {
    cartItems.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity! - 1,
    });
  } else {
    cartItems.setKey(id, { id, title, price, quantity: 1 });
  }
};

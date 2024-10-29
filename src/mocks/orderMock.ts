export interface Cake {
  id: string;
  title: string;
  quantity?: number;
  currentPrice?: number;
  price: number;
}
export const orderMock: Cake[] = [
  {
    id: "torta-frutilla",
    title: "Torta de Frutilla",
    quantity: 3,
    price: 1500,
  },
  {
    id: "cheesecake-frutos-rojos",
    title: "Cheesecake de Frutos Rojos",
    quantity: 5,
    price: 1800,
  },
  {
    id: "brownie-nuez",
    title: "Brownie con Nueces",
    quantity: 2,
    price: 1200,
  },
  {
    id: "tiramisu",
    title: "Tiramisú",
    quantity: 4,
    price: 2000,
  },
  {
    id: "torta-chocolate",
    title: "Torta de Chocolate",
    quantity: 6,
    price: 1700,
  },
  {
    id: "lemon-pie",
    title: "Lemon Pie",
    quantity: 3,
    price: 1600,
  },
  {
    id: "torta-oreo",
    title: "Torta Oreo",
    quantity: 5,
    price: 1900,
  },
];

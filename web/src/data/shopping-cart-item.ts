export interface ShoppingCartItem {
  id: number;
  name: string;
  imageURL: string;
  price: number;
  amount: number;
}

export const mockedCartItems: ShoppingCartItem[] = [
  {
    id: 1,
    name: "Persian Silk Scarf",
    imageURL: "https://placehold.co/200x200",
    price: 899,
    amount: 2,
  },
  {
    id: 2,
    name: "Samarkand Ceramic Bowl",
    imageURL: "https://placehold.co/200x200",
    price: 649,
    amount: 1,
  },
  {
    id: 3,
    name: "Ceylon Cinnamon",
    imageURL: "https://placehold.co/200x200",
    price: 149,
    amount: 3,
  },
  {
    id: 4,
    name: "Handwoven Kashmiri Rug",
    imageURL: "https://placehold.co/200x200",
    price: 2499,
    amount: 1,
  },
  {
    id: 5,
    name: "Silk Road Tea",
    imageURL: "https://placehold.co/200x200",
    price: 199,
    amount: 2,
  },
  {
    id: 6,
    name: "Persian Saffron",
    imageURL: "https://placehold.co/200x200",
    price: 349,
    amount: 1,
  },
  {
    id: 7,
    name: "Bukhara Embroidered Pillow",
    imageURL: "https://placehold.co/200x200",
    price: 449,
    amount: 2,
  },
  {
    id: 8,
    name: "Damascus Brass Lantern",
    imageURL: "https://placehold.co/200x200",
    price: 799,
    amount: 1,
  },
  {
    id: 9,
    name: "Uzbek Ceramic Plate",
    imageURL: "https://placehold.co/200x200",
    price: 399,
    amount: 2,
  },
  {
    id: 10,
    name: "Kashmiri Wool Shawl",
    imageURL: "https://placehold.co/200x200",
    price: 1299,
    amount: 1,
  },
  {
    id: 11,
    name: "Rosewater of Persia",
    imageURL: "https://placehold.co/200x200",
    price: 179,
    amount: 2,
  },
  {
    id: 12,
    name: "Caravan Spice Blend",
    imageURL: "https://placehold.co/200x200",
    price: 129,
    amount: 4,
  },
];

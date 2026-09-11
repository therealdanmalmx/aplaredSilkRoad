import { cartAtom } from "@/lib/cart";
import type { CartItem } from "@/lib/types";
import { useAtom } from "jotai/react";

export function useCartStorage() {
  const [cart, setCart] = useAtom(cartAtom);

  function addItem(product: CartItem) {
    setCart((current) => {
      const exists = current.find((p) => p.id === product.id);

      if (exists) {
        return current.map((p) =>
          p.id === product.id ? { ...p, amount: p.amount + product.amount } : p,
        );
      }

      return [...current, product];
    });
  }

  function deleteItem(id: string) {
    const newCart = cart.filter((i) => i.id !== id);
    setCart([...newCart]);
  }

  function resetCart() {
    setCart([]);
  }

  return { addItem, deleteItem, resetCart, cart };
}

import { getProduct } from "@/api/product";
import { useCartStorage } from "@/hooks/useCartStorage";
import { useEffect, useState } from "react";
import type { Product } from "../../../api/src/interfaces/admin";
import ShoppingCartCard from "./shopping-cart-card";

interface Props {
  scrollabe?: boolean;
}

export default function ShoppingCart(props: Props) {
  const { cart } = useCartStorage();

  const [products, setProducts] = useState<Product[]>();

  const subTotal = cart.reduce((total, ci) => {
    const product = products?.find((p) => p.id == ci.id);
    if (!product) return 0;

    return total + product.price * ci.amount;
  }, 0);

  const shipping = 0;
  const total = subTotal + shipping;

  useEffect(() => {
    const fetchProducts = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      const products: Promise<Product>[] = [];
      cart.forEach((ci) => products.push(getProduct(ci.id)));

      setProducts(await Promise.all(products));
    };

    fetchProducts();
  }, [cart]);

  return (
    <section className="flex flex-col h-full min-h-0">
      <div className={props.scrollabe ? "min-h-0 flex-1 overflow-y-auto" : ""}>
        {cart.map((ci) => {
          const product = products?.find((p) => p.id === ci.id);

          return (
            <ShoppingCartCard cartItem={ci} product={product} key={ci.id} />
          );
        })}
      </div>
      <div className="shrink-0 border-t p-4">
        <p>Subtotal: {subTotal} kr</p>
        <p>Shipping: {shipping}</p>
        <p>Total: {total}</p>
      </div>
    </section>
  );
}

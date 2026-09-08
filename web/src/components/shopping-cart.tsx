import { useCartStorage } from "@/hooks/useCartStorage";
import ShoppingCartCard from "./shopping-cart-card";

export default function ShoppingCart() {
  const { cart } = useCartStorage();

  // const total = cartItems.reduce(
  //   (sum, item) => sum + item.price * item.amount,
  //   0,
  // );

  return (
    <section>
      <div>
        {cart.map((ci) => (
          <ShoppingCartCard cartItem={ci} key={ci.id} />
        ))}
      </div>
      {/* <p>Total: {total}</p> */}
    </section>
  );
}

import { mockedCartItems } from "@/data/shopping-cart-item";
import ShoppingCartCard from "./shopping-cart-card";

export default function ShoppingCart() {
  const cartItems = mockedCartItems;
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.amount,
    0,
  );

  return (
    <section>
      <div>
        {cartItems.map((ci) => (
          <ShoppingCartCard cartItem={ci} key={ci.id} />
        ))}
      </div>
      <p>Total: {total}</p>
    </section>
  );
}

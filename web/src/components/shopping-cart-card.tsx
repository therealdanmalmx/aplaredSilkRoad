import type { ShoppingCartItem } from "@/data/shopping-cart-item";

interface Props {
  cartItem: ShoppingCartItem;
}

export default function ShoppingCartCard(props: Props) {
  return (
    <article className="flex gap-1 mb-2">
      <div className="h-full">
        <img
          src={`${props.cartItem.imageURL}`}
          alt={`Product image for: ${props.cartItem.name}`}
          className="size-20 rounded"
        />
      </div>
      <div className="h-full text-left">
        <h3>{props.cartItem.name}</h3>
        <p>á {props.cartItem.price}</p>
        <p>Amount: {props.cartItem.amount}</p>
        <p>Item Total: {props.cartItem.price * props.cartItem.amount}</p>
      </div>
    </article>
  );
}

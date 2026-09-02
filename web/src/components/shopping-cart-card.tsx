import { Button } from "@/components/ui/button";
import type { ShoppingCartItem } from "@/data/shopping-cart-item";
import { useIsMobile } from "@/hooks/use-mobile";
import { LuTrash2 } from "react-icons/lu";

interface Props {
  cartItem: ShoppingCartItem;
}

export default function ShoppingCartCard(props: Props) {
  const isMobile = useIsMobile();

  return (
    <article className="flex gap-1 mb-2 p-2 items-center justify-between">
      <div className="flex gap-1 items-center">
        <img
          src={`${props.cartItem.imageURL}`}
          alt={`Product image for: ${props.cartItem.name}`}
          className={(isMobile ? "size-10" : "size-20") + " rounded-full"}
        />
        <div className="h-full text-left">
          <h3>{props.cartItem.name}</h3>
          <p>á {props.cartItem.price}</p>
          <p>Amount: {props.cartItem.amount}</p>
          <p>Item Total: {props.cartItem.price * props.cartItem.amount}</p>
        </div>
      </div>
      <Button variant="ghost">
        <LuTrash2 />
      </Button>
    </article>
  );
}

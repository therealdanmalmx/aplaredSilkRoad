import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { ShoppingCartItem } from "@/data/shopping-cart-item";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { LuTrash2 } from "react-icons/lu";

interface Props {
  cartItem: ShoppingCartItem;
}

export default function ShoppingCartCard(props: Props) {
  const isMobile = useIsMobile();
  const [amount, setAmount] = useState(props.cartItem.amount);

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
          <Input
            type="number"
            min={1}
            max={99}
            value={amount}
            onChange={(e) => {
              const value = Number(e.target.value);
              setAmount(Math.min(99, Math.max(1, value)));
            }}
          />
          <p>Item Total: {props.cartItem.price * props.cartItem.amount}</p>
        </div>
      </div>
      <Button variant="ghost">
        <LuTrash2 />
      </Button>
    </article>
  );
}

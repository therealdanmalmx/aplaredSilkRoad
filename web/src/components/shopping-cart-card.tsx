import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCartStorage } from "@/hooks/useCartStorage";
import type { CartItem } from "@/lib/types";
import { LuTrash2 } from "react-icons/lu";
import type { Product } from "../../../api/src/interfaces/admin";

interface Props {
  cartItem: CartItem;
  product?: Product;
}

export default function ShoppingCartCard(props: Props) {
  const isMobile = useIsMobile();
  const { addItem, deleteItem } = useCartStorage();

  return (
    <article className="flex gap-1 mb-2 p-2 items-center justify-between">
      <div className="flex gap-1 items-center self-stretch">
        {props.product ? (
          <img
            src={`${props.product.imageURL}`}
            alt={`Product image for: ${props.product.name}`}
            className={(isMobile ? "size-10" : "size-20") + " rounded-full"}
          />
        ) : (
          <Skeleton
            className={(isMobile ? "size-10" : "size-20") + " rounded-full"}
          />
        )}
        <div className="h-full text-left flex flex-col justify-between">
          {props.product ? (
            <h3>{props.product.name}</h3>
          ) : (
            <Skeleton className="h-4 w-25" />
          )}
          {props.product ? (
            <Input
              type="number"
              min={1}
              value={props.cartItem.amount}
              onChange={(e) => {
                const value = Math.max(1, Number(e.target.value));
                const diff = value - props.cartItem.amount;

                addItem({
                  id: props.cartItem.id,
                  amount: diff,
                });
              }}
            />
          ) : (
            <Skeleton className="h-4 w-25" />
          )}
        </div>
      </div>
      <div className="flex flex-col items-end justify-between self-stretch">
        {props.product ? (
          <div>
            <p className="text-nowrap">á {props.product.price} kr</p>
            <p className="text-nowrap">
              {props.product.price * props.cartItem.amount} kr
            </p>
          </div>
        ) : (
          <Skeleton className="h-4 w-12.5" />
        )}
        {props.product ? (
          <Button
            variant="ghost"
            className="cursor-pointer"
            onClick={() => deleteItem(props.cartItem.id)}
          >
            <LuTrash2 />
          </Button>
        ) : (
          <Skeleton className="size-6" />
        )}
      </div>
    </article>
  );
}

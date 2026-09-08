import { getProduct } from "@/api/product";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import type { CartItem } from "@/lib/types";
import { useEffect, useState } from "react";
import { LuTrash2 } from "react-icons/lu";
import type { Product } from "../../../api/src/interfaces/admin";
import { Skeleton } from "./ui/skeleton";

interface Props {
  cartItem: CartItem;
}

export default function ShoppingCartCard(props: Props) {
  const isMobile = useIsMobile();
  const [amount, setAmount] = useState(props.cartItem.amount);
  const [productInfo, setProductInfo] = useState<Product>();

  useEffect(() => {
    const getProductInfo = async () => {
      const product = await getProduct(props.cartItem.id);
      setProductInfo(product);
    };

    getProductInfo();
  }, []);

  return (
    <article className="flex gap-1 mb-2 p-2 items-center justify-between">
      <div className="flex gap-1 items-center self-stretch">
        {productInfo ? (
          <img
            src={`${productInfo.imageURL}`}
            alt={`Product image for: ${productInfo.name}`}
            className={(isMobile ? "size-10" : "size-20") + " rounded-full"}
          />
        ) : (
          <Skeleton
            className={(isMobile ? "size-10" : "size-20") + " rounded-full"}
          />
        )}
        <div className="h-full text-left flex flex-col justify-between">
          {productInfo ? (
            <h3>{productInfo.name}</h3>
          ) : (
            <Skeleton className="h-4 w-25" />
          )}
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
        </div>
      </div>
      <div className="flex flex-col items-end justify-between self-stretch">
        {productInfo ? (
          <p>á {productInfo?.price} kr</p>
        ) : (
          <Skeleton className="h-4 w-12.5" />
        )}
        <Button variant="ghost">
          <LuTrash2 />
        </Button>
      </div>
    </article>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCartStorage } from "@/hooks/useCartStorage";
import { useState } from "react";
import { Link } from "react-router";
import type { Product } from "../../../api/src/interfaces/admin";

export default function ProductCard(product: Product) {
  const [amount, setAmount] = useState(1);
  const { addItem } = useCartStorage();

  function AddItemToCart() {
    addItem({ id: product.id, amount });
    setAmount(1);
  }

  return (
    <Card className=" w-full pt-0">
      <Link key={product.id} to={`/product/${product.id}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={product.imageURL}
            alt={product.name}
            className="h-50 w-full object-cover"
          />
        </div>

        <CardHeader className="p-2 min-h-44">
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>
            <b>{product.price} kr</b>
            <p>{product.description}</p>
          </CardDescription>
        </CardHeader>
      </Link>
      <CardFooter className="grid items-center h-32">
        <Button>
          <Link to={`product/${product.id}`}>View</Link>
        </Button>
        <div className="flex justify-between w-full gap-4">
          <Button
            className="flex flex-1 max-w-24 sm:max-w-svh cursor-pointer"
            onClick={() => AddItemToCart()}
          >
            Add to cart
          </Button>
          <Input
            className="max-w-24"
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          {/* <input
            className="max-w-10"
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          /> */}
        </div>
      </CardFooter>
    </Card>
  );
}

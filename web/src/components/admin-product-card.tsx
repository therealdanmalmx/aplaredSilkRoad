import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuPencil, LuTrash2 } from "react-icons/lu";
import type { Product } from "../../../api/src/interfaces/admin";

export function AdminProductCard(product: Product) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 h-96">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={product.imageURL}
          alt={product.name}
          className="h-50 w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex">
        <Button className="cursor-pointer">
          Update <LuPencil />
        </Button>
        <Button className="cursor-pointer">
          Delete <LuTrash2 />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AdminProductCard;

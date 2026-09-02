import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { LuPencil, LuTrash2 } from "react-icons/lu";
import type { Product } from '../../../api/src/interfaces/admin';

export function ProductCard(product: Product) {
  return (
    <Card className="relative mx-auto w-11/12 sm pt-0 h-96">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={product.imageURL}
          alt={product.name}
          className="h-50 w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>
        {product.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col space-y-2">
        <Button className="rounded-none w-full cursor-pointer bg-orange-400 hover:bg-orange-500"><LuPencil /> Update</Button>
        <Button className="rounded-none w-full cursor-pointer bg-orange-400 hover:bg-orange-500"><LuTrash2 /> Delete</Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard;
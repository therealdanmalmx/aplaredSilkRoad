import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import CustomDialog from "@/components/custom-dialog";
import { LuPencil } from "react-icons/lu";
import { Link } from "react-router";
import type { Product } from "../../../api/src/interfaces/admin";
import { Badge } from "./ui/badge";

export function AdminProductCard({ product, onDeleted }: { product: Product, onDeleted: (id: string) => void }) {
  return (
    <Card className="relative mx-auto w-full sm pt-0 h-96">
      <Badge className="absolute top-4 left-4 z-50 p-4 text-md">{product.price/100}kr</Badge>
      <Badge className="absolute top-32 right-4 z-50 p-4 text-md">{product.slug}</Badge>
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
      <CardFooter className="flex flex-col space-y-2">
        <Link to={`update-product/${product.id}`}>
          <Button className="rounded-none w-73 cursor-pointer bg-primary">
            <LuPencil /> Update
          </Button>
        </Link>
        <CustomDialog productId={product.id} onDeleted={onDeleted}/>
      </CardFooter>
    </Card>
  );
}

export default AdminProductCard;

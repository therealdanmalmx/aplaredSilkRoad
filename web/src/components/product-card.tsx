import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "../../../api/src/interfaces/admin";

export default function ProductCard(product: Product) {
  return (
    <Card className="relative mx-auto w-full sm pt-0 h-96">
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
      <CardFooter></CardFooter>
    </Card>
  );
}

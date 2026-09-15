import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ShoppingCart from "./shopping-cart";

export default function CheckoutCartCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your cart</CardTitle>
      </CardHeader>
      <CardContent>
        <ShoppingCart />
      </CardContent>
    </Card>
  );
}

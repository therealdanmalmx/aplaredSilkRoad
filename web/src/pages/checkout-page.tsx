import CheckoutCartCard from "@/components/checkout-cart-card";
import CheckoutForm from "@/components/checkout-form";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCartStorage } from "@/hooks/useCartStorage";
import { Link } from "react-router";

export default function CheckoutPage() {
  const { cart } = useCartStorage();

  const isMobile = useIsMobile();

  if (cart.length === 0) {
    return (
      <div className="mx-auto m-4 flex flex-col gap-4 w-fit">
        <p className="text-center">Your cart is empty.</p>
        <Button variant="link">
          <Link to="/">Go back to shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div
      className={
        isMobile ? "m-4 flex flex-col" : "mx-auto m-4 flex w-fit gap-8"
      }
    >
      <CheckoutForm />
      <div className={isMobile ? "-order-1" : ""}>
        <CheckoutCartCard />
      </div>
    </div>
  );
}

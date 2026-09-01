import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { useNavigate } from "react-router";
import ShoppingCart from "./shopping-cart";

export default function ShoppingCartDrawer() {
  const navigate = useNavigate();
  const isMobile = true; // TOFIX

  const [isOpen, setIsOpen] = useState(false);

  const toCheckoutButtonHandler = () => {
    navigate("/checkout");
    setIsOpen(false);
  };

  return (
    <Drawer
      swipeDirection="right"
      showSwipeHandle={isMobile}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DrawerTrigger render={<Button variant="outline" />}>Cart</DrawerTrigger>
      <DrawerContent className="h-full">
        <DrawerHeader>
          <DrawerTitle className="text-primary">Shopping cart</DrawerTitle>
          <DrawerDescription>Manage your items</DrawerDescription>
        </DrawerHeader>
        <div className=""></div>
        <div className="scroll-fade-none overflow-y-auto">
          <ShoppingCart />
        </div>
        <DrawerFooter>
          <Button onClick={toCheckoutButtonHandler}>To Checkout</Button>
          <DrawerClose render={<Button variant="outline" />}>
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

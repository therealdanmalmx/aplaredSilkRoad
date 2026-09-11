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
import { useIsMobile } from "@/hooks/use-mobile";
import { useCartStorage } from "@/hooks/useCartStorage";
import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useNavigate } from "react-router";
import ShoppingCart from "./shopping-cart";
import { Badge } from "./ui/badge";

export default function ShoppingCartDrawer() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useCartStorage();

  const toCheckoutButtonHandler = () => {
    navigate("/checkout");
    setIsOpen(false);
  };

  return (
    <Drawer
      swipeDirection={isMobile ? "down" : "right"}
      showSwipeHandle={isMobile}
      open={isOpen}
      onOpenChange={setIsOpen}>
      <DrawerTrigger
        render={
          <div>
            <LuShoppingCart className='text-primary text-2xl cursor-pointer mr-4 z-50' />
            {cart.length > 0 && (
              <Badge
                variant='outline'
                className='size-4 bg-primary rounded-full border-none relative left-4 bottom-3 md:bottom-8 flex justify-center items-center cursor-pointer'>
                <span className='text-[0.7rem] text-white'>{cart.length}</span>
              </Badge>
            )}
          </div>
        }></DrawerTrigger>
      <DrawerContent className={"h-full " + (isMobile ? "" : "min-w-96")}>
        <DrawerHeader>
          <DrawerTitle className='text-primary'>Shopping cart</DrawerTitle>
          <DrawerDescription>Manage your items</DrawerDescription>
        </DrawerHeader>
        <ShoppingCart scrollabe={true} />
        <DrawerFooter>
          <Button onClick={toCheckoutButtonHandler}>To Checkout</Button>
          <DrawerClose render={<Button variant='outline' />}>
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

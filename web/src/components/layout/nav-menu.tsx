import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router";
import MenuDrawer from "../menu-drawer";
import { Button } from "../ui/button";

export default function NavMenu() {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile ? (
        <nav className="flex p-4 gap-4">
          <Button variant="link">
            <Link to="/">Shop</Link>
          </Button>
          <Button variant="link">
            <Link to="checkout">Checkout</Link>
          </Button>
          <Button variant="link">
            <Link to="admin">Admin</Link>
          </Button>
        </nav>
      ) : (
        <MenuDrawer />
      )}
    </>
  );
}

import ShoppingCartDrawer from "../shopping-cart-drawer";
import NavMenu from "./nav-menu";

export default function Header() {
  return (
    <header className="flex items-center h-18 pl-2 pr-2 bg-neutral-foreground border-b-2 border-border justify-between">
      <NavMenu />
      <ShoppingCartDrawer />
    </header>
  );
}

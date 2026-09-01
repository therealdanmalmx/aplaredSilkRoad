import ShoppingCartDrawer from "../shopping-cart-drawer";
import NavMenu from "./nav-menu";

export default function Header() {
  return (
    <header className="flex justify-between">
      <NavMenu />
      <ShoppingCartDrawer />
    </header>
  );
}

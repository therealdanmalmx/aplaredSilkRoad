import { Link } from "react-router";
import { NavigationMenu } from "../ui/navigation-menu";

export default function NavMenu() {
  return (
    <NavigationMenu>
      <Link to="shop">Shop</Link>
      <Link to="Admin">Admin</Link>
    </NavigationMenu>
  );
}

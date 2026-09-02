import { Link } from "react-router";
import { NavigationMenu } from "../ui/navigation-menu";

export default function NavMenu() {
  return (
    <NavigationMenu>
      <Link to="/">Shop</Link>
      <Link to="/admin">Admin</Link>
    </NavigationMenu>
  );
}

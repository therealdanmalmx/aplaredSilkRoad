import { Link } from "react-router";
import { Button } from "../ui/button";
export default function NavMenu() {
  return (
    <nav className="flex p-4 gap-4">
      <Button variant="link">
        <Link to="shop">Shop</Link>
      </Button>
      <Button variant="link">
        <Link to="checkout">Checkout</Link>
      </Button>
      <Button variant="link">
        <Link to="admin">Admin</Link>
      </Button>
    </nav>
  );
}

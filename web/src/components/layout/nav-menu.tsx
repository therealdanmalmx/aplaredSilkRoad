import { Link } from "react-router";
import { Button } from "../ui/button";
export default function NavMenu() {
  return (
    <>
      <Button>
        <Link to="shop">Shop</Link>
      </Button>
      <Button>
        <Link to="admin">Admin</Link>
      </Button>
    </>
  );
}

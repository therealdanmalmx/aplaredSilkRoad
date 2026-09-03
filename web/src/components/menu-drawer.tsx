import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router";

export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { title: "Shop", route: "/" },
    { title: "Admin", route: "admin" },
  ];

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger
        render={<LuMenu className="text-primary cursor-pointer" />}
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Explore Aplared Silk Road</DrawerTitle>
        </DrawerHeader>
        {routes.map((r) => {
          return (
            <Button
              key={r.route}
              variant="link"
              onClick={() => setIsOpen(false)}
            >
              <Link to={r.route}>{r.title}</Link>
            </Button>
          );
        })}
      </DrawerContent>
    </Drawer>
  );
}

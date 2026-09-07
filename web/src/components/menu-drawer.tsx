import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { LuCircleArrowRight, LuMenu } from "react-icons/lu";
import { Link } from "react-router";

export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { title: "Shop", route: "/" },
    { title: "Admin", route: "admin" },
  ];

  return (
    <Drawer swipeDirection="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger
        render={<LuMenu className="text-primary cursor-pointer text-2xl" />}
      />
      <DrawerContent className="h-full bg-background border-none">
        <DrawerHeader className="bg-muted-foreground">
          <DrawerTitle className="font-eb-garamond font-bold text-2xl text-secondary-foreground mb-4">
            Explore Aplared Silk Road
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col mt-4">
          {routes.map((r) => {
            return (
              <Link
                className="flex items-center justify-between w-full h-16 px-4 text-xl text-neutral rounded-none cursor-pointer hover:text-secondary-foreground hover:bg-muted-foreground duration-200"
                key={r.route}
                to={r.route}
                onClick={() => setIsOpen(false)}
              >
                {r.title}
                <LuCircleArrowRight className="text-2xl" />
              </Link>
            );
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

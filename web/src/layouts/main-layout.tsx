import Header from "@/components/layout/header";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

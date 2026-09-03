import Header from "@/components/layout/header";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <main className="min-h-0 flex-1">
        <Outlet />
      </main>
    </div>
  );
}

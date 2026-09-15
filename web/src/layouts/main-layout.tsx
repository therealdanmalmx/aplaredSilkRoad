import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col min-h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

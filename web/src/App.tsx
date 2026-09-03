import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/main-layout";
import AdminPage from "./pages/admin-page";
import CheckoutPage from "./pages/checkout-page";
import NewAdminProductPage from "./pages/new-admi-product-page";
import StartPage from "./pages/start-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<StartPage />} />
          <Route path="admin">
            <Route index element={<AdminPage />} />
            <Route path="add-product" element={<NewAdminProductPage />} />
          </Route>
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

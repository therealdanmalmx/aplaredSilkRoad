import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/main-layout";
import AdminPage from "./pages/admin-page";
import CheckoutPage from "./pages/checkout-page";
import HomePage from "./pages/home-page";
import NewAdminProductPage from "./pages/new-admi-product-page";

function App() {
  return (
    // Flytta index-propertyn till indexsidans element när den är skapad och inlagd som child inuti routen för MainLayout.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
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

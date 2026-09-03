import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/main-layout";
import CheckoutPage from "./pages/checkout-page";
import NewAdminProductPage from "./pages/new-admi-product-page";
import StartPage from "./pages/start-page";

function App() {
  return (
    // Flytta index-propertyn till indexsidans element när den är skapad och inlagd som child inuti routen för MainLayout.
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<StartPage />} />
          <Route path="/admin" element={<NewAdminProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

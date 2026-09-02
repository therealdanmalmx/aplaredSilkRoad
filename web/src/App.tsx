import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/main-layout";
import AdminPage from "./pages/admin-page";
import CheckoutPage from "./pages/checkout-page";
import HomePage from "./pages/home-page";

function App() {
  return (
    // Flytta index-propertyn till indexsidans element när den är skapad och inlagd som child inuti routen för MainLayout.
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

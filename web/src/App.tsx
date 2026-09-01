import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./layouts/main-layout";
import CheckoutPage from "./pages/checkout-page";
function App() {
  return (
    // Flytta index-propertyn till indexsidans element när den är skapad och inlagd som child inuti routen för MainLayout.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

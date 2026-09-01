import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./layouts/main-layout";
function App() {
  return (
    // Flytta index-propertyn till indexsidan när den är skapad och inlagd som child inuti routen för MainLayout.
    <BrowserRouter>
      <Routes>
        <Route index element={<MainLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./layouts/main-layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

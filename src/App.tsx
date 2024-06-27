import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import GeneralProducts from "./Pages/GeneralProducts";
import "./Style/App.css";
import { DataContextProvider } from "./Context/DataContext";
import SpecificProducts from "./Pages/SpecificProducts";
import Favorite from "./Pages/Favorite";
import CartProducts from "./Pages/CartProducts";

function App() {
  return (
    <>
      <DataContextProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path={`/favorite`} element={<Favorite />} />
              <Route path={`/cart`} element={<CartProducts />} />
              <Route path="/c/:id" element={<GeneralProducts />} />
              <Route path={`/:id`} element={<SpecificProducts />} />
            </Routes>
          </main>
        </BrowserRouter>
      </DataContextProvider>
    </>
  );
}

export default App;

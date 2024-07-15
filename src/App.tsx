import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Favorite from "./Pages/Favorite";
import Header from "./Components/Header/Index";
import SearchProducts from "./Pages/SearchProducts";
import GeneralProducts from "./Pages/GeneralProducts";
import SpecificProducts from "./Pages/SpecificProducts";
import "./Style/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:id" element={<SearchProducts />} />
            <Route path="/c/:category/:id" element={<GeneralProducts />} />
            <Route path={`/:subcategory/:id`} element={<SpecificProducts />} />
            <Route path={`/favorite`} element={<Favorite />} />
            <Route path={`/cart`} element={<Cart />} />
            <Route path={`/produto/:id`} element={<Product />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Index";
import Product from "./Pages/Product/Index";
import Favorite from "./Pages/Favorite/Index";
import Header from "./Components/Header/Index";
import SearchProducts from "./Pages/SearchProducts/Index";
import SubCategory from "./Pages/SubCategory/Index";
import PrincipalCategory from "./Pages/PrincipalCategory/Index";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:id" element={<SearchProducts />} />
            <Route path="/c/:category/:id" element={<PrincipalCategory />} />
            <Route path={`/:subcategory/:id`} element={<SubCategory />} />
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

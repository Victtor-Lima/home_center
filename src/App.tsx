import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Index";
import Product from "./pages/Product/Index";
import Favorite from "./pages/Favorite/Index";
import Header from "./components/Header/Index";
import SearchProducts from "./pages/SearchProducts/Index";
import SubCategory from "./pages/SubCategory/Index";
import PrincipalCategory from "./pages/PrincipalCategory/Index";
import "./App.css";
import Footer from "./components/Footer/Index";

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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Index";
import Product from "./pages/Product/Index";
import Favorite from "./pages/Favorite/Index";
import Header from "./components/Header/Index";
import SearchProducts from "./pages/SearchProducts/Index";
import SubCategory from "./pages/SubCategory/Index";
import PrincipalCategory from "./pages/PrincipalCategory/Index";
import Login from "./pages/Login/Index";
import "./App.css";
import Footer from "./components/Footer/Index";
import { LoginProvider } from "./context/LoginContext";
import SignUp from "./pages/signUp/Index";

function App() {
  return (
    <>
      <LoginProvider>
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
              <Route path="/login" element={<Login />} />
              <Route path="/login/signup" element={<SignUp />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </LoginProvider>
    </>
  );
}

export default App;

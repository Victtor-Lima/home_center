import { Route, Routes } from "react-router-dom";
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
import ProtectedRouter from "./utilityFunctions/hooks/ProtectedRouter";

function App() {
  return (
    <>
      <LoginProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/home_center/" element={<Home />} />
            <Route
              path="/home_center/search/:id"
              element={<SearchProducts />}
            />
            <Route
              path="/home_center/c/:category/:id"
              element={<PrincipalCategory />}
            />
            <Route
              path={`/home_center/:subcategory/:id`}
              element={<SubCategory />}
            />
            <Route
              path={`/home_center/favorite`}
              element={
                <ProtectedRouter>
                  <Favorite />
                </ProtectedRouter>
              }
            />
            <Route
              path={`/home_center/cart`}
              element={
                <ProtectedRouter>
                  <Cart />
                </ProtectedRouter>
              }
            />
            <Route path={`/home_center/produto/:id`} element={<Product />} />
            <Route path="/home_center/login" element={<Login />} />
            <Route path="/home_center/login/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </LoginProvider>
    </>
  );
}

export default App;

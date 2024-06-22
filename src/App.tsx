import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import CategoryProducts from "./Pages/CategoryProducts";
import "./Style/App.css";

export type Product = {
  id: string;
  title: string;
  thumbnail: string;
  original_price: number | null;
  price: number;
};

export type SearchByCategory = {
  site_id: string;
  country_default_time_zone: string;
  paging: object;
  results: Array<Product>;
  sort: object;
  available_sorts: Array<object>;
  filters: Array<object>;
  available_filters: Array<object>;
  pdp_tracking: object;
  user_context: null;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/c/:id" element={<CategoryProducts />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

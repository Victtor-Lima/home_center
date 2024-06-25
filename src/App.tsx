import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import CategoryProducts from "./Pages/CategoryProducts";
import "./Style/App.css";
import { DataContextProvider } from "./Context/DataContext";
import Subcategories from "./Pages/Subcategories";

function App() {
  return (
    <>
      <DataContextProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/c/:id" element={<CategoryProducts />} />
              <Route path="/c/:id/subcategory" element={<Subcategories />} />
            </Routes>
          </main>
        </BrowserRouter>
      </DataContextProvider>
    </>
  );
}

export default App;

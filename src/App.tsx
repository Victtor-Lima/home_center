import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import CategoryProducts from "./Pages/CategoryProducts";
import "./Style/App.css";
import { DataContextProvider } from "./Context/DataContext";

function App() {
  return (
    <>
      <DataContextProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<CategoryProducts />} />
            </Routes>
          </main>
        </BrowserRouter>
      </DataContextProvider>
    </>
  );
}

export default App;

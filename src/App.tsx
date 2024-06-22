import React from "react";
import { useEffect } from "react";
import CardList from "./Components/CardList";
import Header from "./Components/Header";
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
  const [data, setData] = React.useState<SearchByCategory | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.mercadolibre.com/sites/MLB/search?category=MLB1055"
      );
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  if (data === null) return;
  return (
    <>
      <Header />
      <CardList data={data} />
    </>
  );
}

export default App;

import React, { CSSProperties } from "react";
import { useEffect } from "react";

const styleContainer: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "15px",
  flexWrap: "wrap",
};

type product = {
  id: string;
  title: string;
  thumbnail: string;
  original_price: number | null;
  price: number;
};

type SearchByCategory = {
  site_id: string;
  country_default_time_zone: string;
  paging: object;
  results: Array<product>;
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
      console.log(json);
      setData(json);
    };
    fetchData();
  }, []);

  if (data === null) return null;
  return (
    <>
      <div style={styleContainer}>
        {data.results.map((item) => (
          <div key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h1 style={{ fontSize: ".8rem" }}>{item.title}</h1>
            <s>
              {item.original_price?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </s>
            <span style={{ display: "block" }}>
              {item.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

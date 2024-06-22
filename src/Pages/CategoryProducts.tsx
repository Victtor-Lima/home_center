import React from "react";
import CardList from "../Components/CardList";
import { SearchByCategory } from "../App";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<SearchByCategory | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MLB/search?category=${id}`
      );
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [id]);

  if (data === null) return "Carregando...";
  return (
    <section>
      <CardList data={data} />
    </section>
  );
};

export default CategoryProducts;

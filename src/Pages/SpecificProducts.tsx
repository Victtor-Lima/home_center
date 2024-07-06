import NavSidebar from "../Components/NavSidebar";
import CardList from "../Components/CardList";
import { StyleCategoryProducts } from "./GeneralProducts";
import React from "react";
import { fetchData } from "../Utility_functions/fetchData";
import { SearchByCategory } from "../Utility_functions/types_project/types";
import { useParams } from "react-router-dom";

const SpecificProducts = () => {
  const [data, setData] = React.useState<SearchByCategory | null>(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetch() {
      const data = await fetchData<SearchByCategory>(
        `https://api.mercadolibre.com/sites/MLB/search?category=${id?.replace(
          /-/g,
          " "
        )}`
      );
      setData(data);
    }
    fetch();
  }, [id]);

  if (data === null) return "Carregando...";
  return (
    <section style={StyleCategoryProducts}>
      <NavSidebar data={data} />
      <CardList data={data} />
    </section>
  );
};

export default SpecificProducts;

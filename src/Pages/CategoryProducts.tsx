import React from "react";
import CardList from "../Components/CardList";
import { useData } from "../Context/DataContext";
import { useParams } from "react-router-dom";
import NavSidebar from "../Components/NavSidebar";

const StyleCategoryProducts: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "300px auto",
};

const CategoryProducts = () => {
  const { data, seturlProducts } = useData();
  const { id } = useParams();

  React.useEffect(() => {
    seturlProducts(`https://api.mercadolibre.com/sites/MLB/search?${id}`);
  }, [id, seturlProducts]);

  if (data === null) return "Carregando...";
  return (
    <section style={StyleCategoryProducts}>
      <NavSidebar data={data} />
      <CardList data={data} />
    </section>
  );
};

export default CategoryProducts;

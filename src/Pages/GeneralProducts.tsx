import React from "react";
import CardList from "../Components/CardList";
import { useData } from "../Context/DataContext";
import NavSidebar from "../Components/NavSidebar";

export const StyleCategoryProducts: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "300px auto",
};

const GeneralProducts = () => {
  const { data } = useData();

  if (data === null) return "Carregando...";
  return (
    <section style={StyleCategoryProducts}>
      <NavSidebar />
      <CardList data={data} />
    </section>
  );
};

export default GeneralProducts;

import React, { useContext } from "react";
import CardList from "../Components/CardList";
import DataContext from "../Context/DataContext";
import { useLocation } from "react-router-dom";
import NavSidebar from "../Components/NavSidebar";

export const StyleCategoryProducts: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "300px auto",
};

const GeneralProducts = () => {
  const context = useContext(DataContext);

  if (context === null) return;
  if (context.data === null) return "Carregando...";
  return (
    <section style={StyleCategoryProducts}>
      <NavSidebar />
      <CardList data={context.data} />
    </section>
  );
};

export default GeneralProducts;

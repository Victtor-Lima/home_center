import NavSidebar from "../Components/NavSidebar";
import CardList from "../Components/CardList";
import { StyleCategoryProducts } from "./GeneralProducts";
import { useContext } from "react";
import DataContext from "../Context/DataContext";

const SpecificProducts = () => {
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

export default SpecificProducts;

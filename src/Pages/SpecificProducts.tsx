import { useData } from "../Context/DataContext";
import NavSidebar from "../Components/NavSidebar";
import CardList from "../Components/CardList";
import { StyleCategoryProducts } from "./GeneralProducts";

const SpecificProducts = () => {
  const { data } = useData();

  if (data === null) return "Carregando...";
  return (
    <section style={StyleCategoryProducts}>
      <NavSidebar data={data} />
      <CardList data={data} />
    </section>
  );
};

export default SpecificProducts;

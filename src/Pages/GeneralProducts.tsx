import React, { useContext } from "react";
import CardList from "../Components/CardList";
import DataContext from "../Context/DataContext";
import NavSidebar from "../Components/NavSidebar";
import styles from "../Style/CategoryProducts.module.css";
import { useParams } from "react-router-dom";

export const StyleCategoryProducts: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "300px auto",
};

const GeneralProducts = () => {
  const { id } = useParams();
  const context = React.useContext(DataContext);

  React.useEffect(() => {
    context?.seturlProducts(
      `https://api.mercadolibre.com/sites/MLB/search?category=${id?.replace(
        /-/g,
        " "
      )}`
    );
  }, [context, id]);

  if (context === null) return;
  if (context.data === null) return "Carregando...";
  return (
    <section className={styles.wrapper_category_products}>
      <NavSidebar />
      <CardList data={context.data} />
    </section>
  );
};

export default GeneralProducts;

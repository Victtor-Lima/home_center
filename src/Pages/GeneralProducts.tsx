import React, { useContext } from "react";
import NavSidebar from "../Components/NavSidebar/Index";
import styles from "../Style/CategoryProducts.module.css";
import { useParams } from "react-router-dom";
import { SearchByCategory } from "../Utility_functions/types_project/types";
import { fetchData } from "../Utility_functions/fetchData";
import CardList from "../Components/CardList/Index";

export const StyleCategoryProducts: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "300px auto",
};

const GeneralProducts = () => {
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
    <section className={styles.wrapper_category_products}>
      <NavSidebar data={data} />
      <CardList data={data} />
    </section>
  );
};

export default GeneralProducts;

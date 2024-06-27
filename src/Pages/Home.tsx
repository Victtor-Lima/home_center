import React from "react";
import CardGeneralProd from "../Components/CardGeneralProd";
import { fetchData } from "../Hooks/fetchData";
import { Obj } from "../Utility_functions/types_project/types";
import styles from "../Style/Home.module.css";

const Home = () => {
  const categoryFilter = ["MLB1574", "MLB1500", "MLB5726"];
  const [categories, setCategories] = React.useState<Array<Obj> | null>(null);

  React.useEffect(() => {
    async function fetchCatecories() {
      const categories = await fetchData<Array<Obj>>(
        `https://api.mercadolibre.com/sites/MLB/categories`
      );
      setCategories(categories);
    }
    fetchCatecories();
  }, []);

  if (categories === null) return "Carregando...";
  return (
    <section className={styles.wrapper_home}>
      {categories
        ?.filter((category) => categoryFilter.includes(category.id))
        .map((category) => (
          <CardGeneralProd category={category} />
        ))}
    </section>
  );
};

export default Home;

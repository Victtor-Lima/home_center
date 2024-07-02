import React from "react";
import DataContext from "../Context/DataContext";
import { useParams } from "react-router-dom";
import {
  IProduct,
  SearchByCategory,
} from "../Utility_functions/types_project/types";
import CardProduct from "../Components/CardProduct";
import styles from "../Style/Product.module.css";
import { getLocal } from "../Utility_functions/localstorage_funcs";
import { fetchData } from "../Hooks/fetchData";

const Product = () => {
  const [favorite, setFavorite] = React.useState<Array<IProduct>>([]);
  const { id } = useParams();
  const context = React.useContext(DataContext);
  const [data, setData] = React.useState<SearchByCategory | null>(null);

  React.useEffect(() => {
    async function fetch() {
      const data = await fetchData<SearchByCategory>(
        `https://api.mercadolibre.com/sites/MLB/search?q=${id?.replace(
          /-/g,
          " "
        )}`
      );
      setData(data);
    }
    fetch();
  }, [id]);

  React.useEffect(() => {
    const favoritesLocal = getLocal("favorites");

    if (favoritesLocal) {
      setFavorite(favoritesLocal);
    }
  }, []);

  if (data === null) return "carregando...";
  return (
    <section className={styles.container_page_product}>
      <CardProduct
        product={data.results[0]}
        arrFavorite={[favorite, setFavorite]}
      />
    </section>
  );
};

export default Product;

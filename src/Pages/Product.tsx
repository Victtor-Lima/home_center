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
  const [data, setData] = React.useState<SearchByCategory | null>(null);
  const [favorite, setFavorite] = React.useState<Array<IProduct>>([]);
  const [cart, setCart] = React.useState<Array<IProduct>>([]);
  const { id } = useParams();

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

  React.useEffect(() => {
    const cartLocal = getLocal("cart");
    if (cartLocal) {
      setCart(cartLocal);
    }
  }, []);

  if (data === null) return "carregando...";
  return (
    <section className={styles.container_page_product}>
      <CardProduct
        product={data.results[0]}
        arrFavorite={[favorite, setFavorite]}
        arrCart={[cart, setCart]}
      />
    </section>
  );
};

export default Product;

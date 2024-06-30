import React from "react";
import Card from "./Card";
import styles from "../Style/CardList.module.css";
import {
  Product,
  SearchByCategory,
} from "../Utility_functions/types_project/types";
import { getLocal } from "../Utility_functions/localstorage_funcs";

const CardList = ({ data }: { data: SearchByCategory }) => {
  const [favorite, setFavorite] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const favoriteLocal: Product[] = getLocal("favorites");
    if (favoriteLocal) {
      setFavorite(favoriteLocal);
    }
  }, []);

  return (
    <section className={styles.wrapper_card}>
      <ul className={styles.wrapper_container_card_product}>
        {data.results.map((product) => (
          <li key={product.id}>
            <Card product={product} arrFavorite={[favorite, setFavorite]} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CardList;

import React from "react";
import styles from "../Style/CardList.module.css";
import {
  IProduct,
  SearchByCategory,
} from "../Utility_functions/types_project/types";
import { getLocal } from "../Utility_functions/localstorage_funcs";
import CardProduct from "./CardProduct/Index";

const CardList = ({ data }: { data: SearchByCategory }) => {
  const [favorite, setFavorite] = React.useState<IProduct[]>([]);

  React.useEffect(() => {
    const favoriteLocal: IProduct[] = getLocal("favorites");
    if (favoriteLocal) {
      setFavorite(favoriteLocal);
    }
  }, []);

  return (
    <section className={styles.wrapper_card}>
      <ul className={styles.wrapper_container_card_product}>
        {data.results.map((product) => (
          <li key={product.id}>
            <CardProduct
              product={product}
              arrFavorite={[favorite, setFavorite]}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CardList;

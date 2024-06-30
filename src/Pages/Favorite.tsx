import React from "react";
import { Product } from "../Utility_functions/types_project/types";
import CardFavorite from "../Components/CardFavorite";
import { getLocal } from "../Utility_functions/localstorage_funcs";
import styles from "../Style/Favorite.module.css";

const Favorite = () => {
  const [favorite, setFavorite] = React.useState<Array<Product>>([]);

  React.useEffect(() => {
    const favoritesLocal = getLocal("favorites");

    if (favoritesLocal) {
      setFavorite(favoritesLocal);
    }
  }, []);

  return (
    <section className={styles.wrapper_favorite}>
      <h1 className={styles.favorite_title}>Favoritos</h1>
      {favorite.map((product) => (
        <CardFavorite
          key={product.id}
          product={product}
          arrFavorite={[favorite, setFavorite]}
        />
      ))}
    </section>
  );
};

export default Favorite;

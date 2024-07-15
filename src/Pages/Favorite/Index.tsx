import React from "react";
import * as S from "./Styled";
import CardFavorite from "../../Components/CardFavorite/Index";
import { getLocal } from "../../Utility_functions/localstorage_funcs";
import { IProduct } from "../../Utility_functions/types_project/types";

const Favorite = () => {
  const [favorite, setFavorite] = React.useState<Array<IProduct>>([]);

  React.useEffect(() => {
    const favoritesLocal = getLocal("favorites");

    if (favoritesLocal) {
      setFavorite(favoritesLocal);
    }
  }, []);

  return (
    <S.ContainerFavorite>
      <S.FavoriteTitle>Favoritos</S.FavoriteTitle>
      {favorite.map((product) => (
        <CardFavorite
          key={product.id}
          product={product}
          arrFavorite={[favorite, setFavorite]}
        />
      ))}
    </S.ContainerFavorite>
  );
};

export default Favorite;

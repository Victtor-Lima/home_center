import React from "react";
import * as S from "./Styled";
import { IProduct, SearchByCategory } from "../../typesProject/types";
import { getLocal } from "../../utilityFunctions/localstorage_funcs";
import CardProduct from "../CardProduct/Index";

const CardList = ({ data }: { data: SearchByCategory }) => {
  const [favorite, setFavorite] = React.useState<IProduct[]>([]);

  React.useEffect(() => {
    const favoriteLocal: IProduct[] = getLocal("favorites");
    if (favoriteLocal) {
      setFavorite(favoriteLocal);
    }
  }, []);

  return (
    <S.ContainerCardList>
      <S.ListCards>
        {data.results.map((product) => (
          <li key={product.id}>
            <CardProduct
              product={product}
              arrFavorite={[favorite, setFavorite]}
            />
          </li>
        ))}
      </S.ListCards>
    </S.ContainerCardList>
  );
};

export default CardList;

import React from "react";
import * as S from "./Styled";
import SpecificProduct from "../../Components/EspecificProduct/Index";
import { fetchData } from "../../Utility_functions/fetchData";
import { getLocal } from "../../Utility_functions/localstorage_funcs";
import {
  IProduct,
  SearchByCategory,
} from "../../Utility_functions/types_project/types";
import { useParams } from "react-router-dom";

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
    <S.ContainerProduct>
      <SpecificProduct
        product={data.results[0]}
        arrFavorite={[favorite, setFavorite]}
        arrCart={[cart, setCart]}
      />
    </S.ContainerProduct>
  );
};

export default Product;

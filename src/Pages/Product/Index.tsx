import React from "react";
import * as S from "./Styled";
import SpecificProduct from "../../components/EspecificProduct/Index";
import { fetchData } from "../../utilityFunctions/fetchData";
import { getLocal } from "../../utilityFunctions/localstorage_funcs";
import { IProduct, SearchByCategory } from "../../typesProject/types";
import { useParams } from "react-router-dom";

const Product = () => {
  const [data, setData] = React.useState<SearchByCategory | null>(null);
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

  if (data === null) return "carregando...";
  return (
    <S.ContainerProduct>
      <SpecificProduct />
    </S.ContainerProduct>
  );
};

export default Product;

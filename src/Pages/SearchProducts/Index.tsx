import React from "react";
import * as S from "./Styled";
import CardProduct from "../../components/CardProduct/Index";
import { fetchData } from "../../utilityFunctions/fetchData";
import { SearchByCategory } from "../../typesProject/types";
import { useParams } from "react-router-dom";

const SearchProducts = () => {
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

  if (data === null) return "Carregando...";
  return (
    <S.ContainerSearchProducts>
      <S.SearchProductsList>
        {data.results.map((product) => (
          <li key={product.id}>
            <CardProduct product={product} />
          </li>
        ))}
      </S.SearchProductsList>
    </S.ContainerSearchProducts>
  );
};

export default SearchProducts;

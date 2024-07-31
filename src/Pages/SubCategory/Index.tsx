import React from "react";
import * as S from "./Styled";
import NavSidebar from "../../components/NavSidebar/Index";
import CardList from "../../components/CardList/Index";
import { fetchData } from "../../utilityFunctions/fetchData";
import { useParams } from "react-router-dom";
import { SearchByCategory } from "../../typesProject/types";

const SpecificProducts = () => {
  const [data, setData] = React.useState<SearchByCategory | null>(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetch() {
      const data = await fetchData<SearchByCategory>(
        `https://api.mercadolibre.com/sites/MLB/search?category=${id?.replace(
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
    <S.ContainerPrincipalCategory>
      {data.available_filters.some((item) => item.id === "category") && (
        <NavSidebar data={data} />
      )}
      <CardList data={data} />
    </S.ContainerPrincipalCategory>
  );
};

export default SpecificProducts;

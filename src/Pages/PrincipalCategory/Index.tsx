import React from "react";
import * as S from "./Styled";
import CardList from "../../Components/CardList/Index";
import NavSidebar from "../../Components/NavSidebar/Index";
import { SearchByCategory } from "../../typesProject/types";
import { fetchData } from "../../Utility_functions/fetchData";
import { useParams } from "react-router-dom";

export const StyleCategoryProducts: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "300px auto",
};

const GeneralProducts = () => {
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
      <NavSidebar data={data} />
      <CardList data={data} />
    </S.ContainerPrincipalCategory>
  );
};

export default GeneralProducts;

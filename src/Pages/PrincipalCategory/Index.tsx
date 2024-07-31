import React from "react";
import * as S from "./Styled";
import CardList from "../../components/CardList/Index";
import NavSidebar from "../../components/NavSidebar/Index";
import { SearchByCategory } from "../../typesProject/types";
import { fetchData } from "../../utilityFunctions/fetchData";
import { useParams } from "react-router-dom";

export const StyleCategoryProducts: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "300px auto",
};

function bodyColor() {
  window.document.body.style.backgroundColor = "rgb(232, 232, 232, 38%)";
}

const GeneralProducts = () => {
  bodyColor();
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

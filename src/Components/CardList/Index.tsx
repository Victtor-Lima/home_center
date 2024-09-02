import * as S from "./Styled";
import { SearchByCategory } from "../../typesProject/types";
import CardProduct from "../CardProduct/Index";

const CardList = ({ data }: { data: SearchByCategory }) => {
  return (
    <S.ContainerCardList>
      <S.ListCards>
        {data.results.map((product) => (
          <li key={product.id}>
            <CardProduct product={product} />
          </li>
        ))}
      </S.ListCards>
    </S.ContainerCardList>
  );
};

export default CardList;

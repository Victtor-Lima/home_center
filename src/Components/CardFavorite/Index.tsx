import * as S from "./Styled";
import ButtonDelete from "../ButtonDelete/Index";
import PriceDiscounts from "../PriceDiscounts/Index";
import { ICardFavorite } from "../../typesProject/types";
import { useLogin } from "../../context/LoginContext";

const CardFavorite = ({ product }: ICardFavorite) => {
  const { loggedUser, favorite, setFavorite } = useLogin();

  console.log(favorite);

  return (
    <S.ContainerCardFavorite>
      <img src={product.thumbnail} alt={product.title} />
      <S.ContainerContent>
        <h1>{product.title}</h1>
        <div>
          {product.original_price &&
          product.original_price !== product.price ? (
            <S.OriginalPrice>
              {product.original_price?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </S.OriginalPrice>
          ) : null}
          <S.ContainerPriceFinal>
            <S.PriceFinal>
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </S.PriceFinal>
            <PriceDiscounts product={product} />
          </S.ContainerPriceFinal>
        </div>
        <ButtonDelete
          user={loggedUser}
          product={product}
          arrState={[favorite, setFavorite]}
          nameList="favorite"
        >
          Excluir
        </ButtonDelete>
      </S.ContainerContent>
    </S.ContainerCardFavorite>
  );
};

export default CardFavorite;

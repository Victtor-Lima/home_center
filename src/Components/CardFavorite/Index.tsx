import * as S from "./Styled";
import ButtonDelete from "../ButtonDelete/Index";
import PriceDiscounts from "../PriceDiscounts/Index";
import { ICardFavorite } from "../../typesProject/types";

const CardFavorite = ({ product, arrFavorite }: ICardFavorite) => {
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
          arrParams={[product, arrFavorite, "favorites"]}
          color="#ff7a44"
        >
          Excluir
        </ButtonDelete>
      </S.ContainerContent>
    </S.ContainerCardFavorite>
  );
};

export default CardFavorite;

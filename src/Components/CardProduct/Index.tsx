import * as S from "./Styled";
import PriceDiscounts from "../PriceDiscounts/Index";
import { ICardFavorite } from "../../typesProject/types";
import { normalizeString } from "../../utilityFunctions/normalizeString";
import ButtonFavorite from "../ButtonFavorite/Index";

const CardProduct = ({ product }: ICardFavorite) => {
  return (
    <S.ContainerCardProduct key={product.id}>
      <S.LinkProduct to={`/produto/${normalizeString(product.title)}`}>
        <img src={product.thumbnail} alt={product.title} />
        <h1>{product.title}</h1>
        {product.original_price && product.original_price !== product.price ? (
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
      </S.LinkProduct>
      <ButtonFavorite product={product} />
    </S.ContainerCardProduct>
  );
};

export default CardProduct;

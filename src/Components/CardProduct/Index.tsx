import * as S from "./Styled";
import PriceDiscounts from "../PriceDiscounts/Index";
import { ICardFavorite } from "../../typesProject/types";
import { Link } from "react-router-dom";
import { normalizeString } from "../../utilityFunctions/normalizeString";
import ButtonFavorite from "../ButtonFavorite/Index";

const CardProduct = ({ product, arrFavorite }: ICardFavorite) => {
  return (
    <S.ContainerCardProduct key={product.id}>
      <Link to={`/produto/${normalizeString(product.title)}`}>
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
      </Link>
      <ButtonFavorite arrParams={[product, arrFavorite, "favorites"]} />
    </S.ContainerCardProduct>
  );
};

export default CardProduct;

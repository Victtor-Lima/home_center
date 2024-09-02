import * as S from "./Styled";
import PriceDiscounts from "../PriceDiscounts/Index";
import { ICard } from "../../typesProject/types";
import { normalizeString } from "../../utilityFunctions/normalizeString";
import ButtonFavorite from "../ButtonFavorite/Index";
import ButtonCart from "../ButtonCart/Index";
import { FiShoppingCart } from "react-icons/fi";

const CardProduct = ({ product }: ICard) => {
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
      <ButtonCart product={product}>
        <FiShoppingCart color="#fd9d77" size="1.2em" />
      </ButtonCart>
    </S.ContainerCardProduct>
  );
};

export default CardProduct;

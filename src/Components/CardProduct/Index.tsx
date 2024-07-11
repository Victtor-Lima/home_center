import * as S from "./Styled";
import { ButtonFavorite } from "../ButtonFavorite/Styled";
import PriceDiscounts from "../PriceDiscounts";
import { ICardFavorite } from "../../Utility_functions/types_project/types";
import { Link } from "react-router-dom";
import { handleFavoriteAction } from "../../Utility_functions/handleFavoriteAction";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { normalizeString } from "../../Utility_functions/normalizeString";

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
      <ButtonFavorite
        onClick={() =>
          handleFavoriteAction([product, arrFavorite, "favorites"])
        }
      >
        {arrFavorite[0].find((item) => item.id === product.id) ? (
          <MdOutlineFavorite color="#ff7a44" size="1.9em" />
        ) : (
          <MdFavoriteBorder color="#fd9d77" size="1.9em" />
        )}
      </ButtonFavorite>
    </S.ContainerCardProduct>
  );
};

export default CardProduct;

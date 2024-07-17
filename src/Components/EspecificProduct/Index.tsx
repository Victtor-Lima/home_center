import * as S from "./Styled";
import ButtonCart from "../ButtonCart/Index";
import PriceDiscounts from "../PriceDiscounts/Index";
import ButtonFavorite from "../ButtonFavorite/Index";
import { ICard } from "../../typesProject/types";

const SpecificProduct = ({ product, arrFavorite, arrCart }: ICard) => {
  return (
    <>
      <S.ContainerSpecificProduct>
        <div>
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <S.ContainerContent>
          <h2>{product.title}</h2>
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
          <ButtonFavorite arrParams={[product, arrFavorite, "favorites"]} />
          <ButtonCart arrParams={[product, arrCart, "cart"]}>
            ADICIONAR
          </ButtonCart>
        </S.ContainerContent>
      </S.ContainerSpecificProduct>
    </>
  );
};

export default SpecificProduct;

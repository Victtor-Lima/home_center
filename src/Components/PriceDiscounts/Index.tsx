import * as S from "./Styled";
import { IProduct } from "../../typesProject/types";
import { price_discounts } from "../../utilityFunctions/price_discount";

const PriceDiscounts = ({ product }: { product: IProduct }) => {
  return (
    <>
      {product.original_price && product.original_price !== product.price ? (
        <S.PriceDiscounts>
          {price_discounts(product.original_price, product.price)}
        </S.PriceDiscounts>
      ) : null}
    </>
  );
};

export default PriceDiscounts;

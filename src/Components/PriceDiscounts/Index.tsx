import * as S from "./Styled";
import { IProduct } from "../../Utility_functions/types_project/types";
import { price_discounts } from "../../Utility_functions/price_discount";

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

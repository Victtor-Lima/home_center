import React from "react";
import { Product } from "../App";
import { price_discounts } from "../Utility_functions/price_discount";

const PriceDiscounts = ({ product }: { product: Product }) => {
  return (
    <>
      {product.original_price && product.original_price !== product.price ? (
        <span className="color_green ">
          {price_discounts(product.original_price, product.price)}
        </span>
      ) : null}
    </>
  );
};

export default PriceDiscounts;

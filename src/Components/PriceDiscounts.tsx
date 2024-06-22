import React from "react";
import { Product } from "../App";
import { price_discounts } from "../Utility_functions/price_discount";
import styles from "../Style/Card.module.css";

const PriceDiscounts = ({ product }: { product: Product }) => {
  return (
    <>
      {product.original_price && product.original_price !== product.price ? (
        <span className={`color_green ${styles.price_discounts}`}>
          {price_discounts(product.original_price, product.price)}
        </span>
      ) : null}
    </>
  );
};

export default PriceDiscounts;

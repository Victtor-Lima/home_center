import React from "react";
import { Product } from "../App";
import styles from "../Style/Card.module.css";
import { price_discounts } from "../Utility_functions/price_discount";

const Card = ({ product }: { product: Product }) => {
  return (
    <div key={product.id} className={styles.container_card_product}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.card_product_img}
      />
      <h1 className={styles.card_product_title}>{product.title}</h1>
      {product.original_price && product.original_price !== product.price ? (
        <span className={styles.card_product_original_price}>
          {product.original_price?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      ) : null}
      <span className={styles.card_product_price}>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      {product.original_price && product.original_price !== product.price ? (
        <span>{price_discounts(product.original_price, product.price)}%</span>
      ) : null}
    </div>
  );
};

export default Card;

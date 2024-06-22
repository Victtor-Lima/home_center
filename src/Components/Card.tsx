import React from "react";
import { Product } from "../App";
import styles from "../Style/Card.module.css";
import PriceDiscounts from "./PriceDiscounts";

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
      <div className={styles.wrapper_final_price}>
        <span className={styles.card_product_price}>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <PriceDiscounts product={product} />
      </div>
    </div>
  );
};

export default Card;

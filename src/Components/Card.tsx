import React from "react";
import { Product } from "../App";
import styles from "../Style/Card.module.css";

const Card = ({ product }: { product: Product }) => {
  return (
    <div key={product.id} className={styles.container_card_product}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.card_product_img}
      />
      <h1 className={styles.card_product_title}>{product.title}</h1>
      <span className={styles.card_product_original_price}>
        {product.original_price?.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <span className={styles.card_product_price}>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    </div>
  );
};

export default Card;

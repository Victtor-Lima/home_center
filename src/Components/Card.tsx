import React from "react";
import styles from "../Style/Card.module.css";
import PriceDiscounts from "./PriceDiscounts";
import { ICard } from "../Utility_functions/types_project/types";
import ButtonFavorite from "./ButtonFavorite";

const Card = ({ product, arrFavorite }: ICard) => {
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
      <ButtonFavorite addToFavorites={[product, arrFavorite, "favorites"]} />
    </div>
  );
};

export default Card;

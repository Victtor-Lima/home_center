import React from "react";
import { Product } from "../Utility_functions/types_project/types";
import styles from "../Style/CardFavorite.module.css";
import PriceDiscounts from "./PriceDiscounts";

const CardFavorite = ({ product }: { product: Product }) => {
  return (
    <div key={product.id} className={styles.wrapper_cardfavorite}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.cardfavorite_img}
      />
      <div>
        <h1 className={styles.cardfavorite_title}>{product.title}</h1>
        <div>
          {product.original_price &&
          product.original_price !== product.price ? (
            <span className={styles.cardfavorite_original_price}>
              {product.original_price?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          ) : null}
          <div className={styles.wrapper_cardfavorite_final_price}>
            <span className={styles.cardfavorite_price}>
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <PriceDiscounts product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFavorite;

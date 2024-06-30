import React from "react";
import { ICard } from "../Utility_functions/types_project/types";
import styles from "../Style/CardFavorite.module.css";
import PriceDiscounts from "./PriceDiscounts";
import ButtonDelete from "./ButtonDelete";

const CardFavorite = ({ product, arrFavorite }: ICard) => {
  return (
    <div key={product.id} className={styles.wrapper_cardfavorite}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.cardfavorite_img}
      />
      <div className={styles.container_cardfavorite_content}>
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
        <ButtonDelete
          deleteFromFavorites={[product, arrFavorite, "favorites"]}
        />
      </div>
    </div>
  );
};

export default CardFavorite;

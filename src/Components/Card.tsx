import React from "react";
import styles from "../Style/Card.module.css";
import PriceDiscounts from "./PriceDiscounts";
import { ICardFavorite } from "../Utility_functions/types_project/types";
import { Link } from "react-router-dom";
import * as S from "./ButtonFavorite/Styled";
import { handleFavoriteAction } from "../Utility_functions/handleFavoriteAction";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

export function normalizeString(string: string) {
  return string
    .normalize("NFD")
    .replace(/[\u0300-\u036f%,/]/g, "")
    .replace(/\s+/g, "-")
    .toLocaleLowerCase();
}

const Card = ({ product, arrFavorite }: ICardFavorite) => {
  return (
    <div key={product.id} className={styles.container_card_product}>
      <Link to={`/produto/${normalizeString(product.title)}`}>
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
      </Link>
      <S.ButtonFavorite
        onClick={() =>
          handleFavoriteAction([product, arrFavorite, "favorites"])
        }
      >
        {arrFavorite[0].find((item) => item.id === product.id) ? (
          <MdOutlineFavorite color="#ff7a44" size="1.9em" />
        ) : (
          <MdFavoriteBorder color="#fd9d77" size="1.9em" />
        )}
      </S.ButtonFavorite>
    </div>
  );
};

export default Card;

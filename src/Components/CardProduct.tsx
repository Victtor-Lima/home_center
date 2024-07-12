import { ICard } from "../Utility_functions/types_project/types";
import PriceDiscounts from "./PriceDiscounts";
import styles from "../Style/CardProduct.module.css";
import ButtonFavorite from "./ButtonFavorite/Index";
import { addToListLocal } from "../Utility_functions/addToListLocal";
import ButtonCart from "./ButtonCart/Index";

const CardProduct = ({ product, arrFavorite, arrCart }: ICard) => {
  return (
    <>
      <section className={styles.container_card_product}>
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className={styles.card_product_img}
          />
        </div>
        <div className={styles.card_product_container_content}>
          <h2 className={styles.card_product_title}>{product.title}</h2>
          {product.original_price &&
          product.original_price !== product.price ? (
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
          <ButtonFavorite
            addToFavorites={[product, arrFavorite, "favorites"]}
          />
          <ButtonCart
            onClick={() => addToListLocal([product, arrCart, "cart"])}
          >
            ADICIONAR
          </ButtonCart>
        </div>
      </section>
    </>
  );
};

export default CardProduct;

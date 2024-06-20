import React from "react";
import { Product } from "../App";

const Card = ({ product }: { product: Product }) => {
  // console.log(product);

  return (
    <div key={product.id}>
      <img src={product.thumbnail} alt={product.title} />
      <h1 style={{ fontSize: ".8rem" }}>{product.title}</h1>
      <span>
        {product.original_price?.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <span style={{ display: "block" }}>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    </div>
  );
};

export default Card;

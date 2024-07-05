import React from "react";
import { IProduct } from "../Utility_functions/types_project/types";

const CardCart = ({
  item,
  setCart,
}: {
  item: IProduct;
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
}) => {
  return (
    <div style={{ display: "flex" }}>
      <img src={item.thumbnail} alt={item.title} />
      <h3>{item.title}</h3>
      <button></button>
      <span>{item.amount}</span>
      <button></button>
      <span>{item.price}</span>
    </div>
  );
};

export default CardCart;

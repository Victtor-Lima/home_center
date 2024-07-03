import React from "react";
import { addToListLocal } from "../Utility_functions/addToListLocal";
import styles from "../Style/CardProduct.module.css";
import { IButtonCart } from "../Utility_functions/types_project/types";

const buttonCart = ({ arrCart }: IButtonCart) => {
  return (
    <button
      onClick={() => addToListLocal(arrCart)}
      className={styles.button_cart}
    >
      ADICIONAR
    </button>
  );
};

export default buttonCart;

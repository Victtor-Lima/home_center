import React from "react";
import { IButtonDelete } from "../Utility_functions/types_project/types";
import { handleFavoriteAction } from "../Utility_functions/handleFavoriteAction";
import styles from "../Style/CardFavorite.module.css";

const ButtonDelete = ({ deleteFromFavorites }: IButtonDelete) => {
  return (
    <button
      onClick={() => handleFavoriteAction(deleteFromFavorites)}
      className={styles.button_delete}
    >
      Excluir
    </button>
  );
};

export default ButtonDelete;

import React from "react";
import styles from "../Style/ButtonFavorite.module.css";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { IButtonFavorite } from "../Utility_functions/types_project/types";
import { handleFavoriteAction } from "../Utility_functions/handleFavoriteAction";

const ButtonFavorite = ({ addToFavorites }: IButtonFavorite) => {
  return (
    <button
      className={styles.button_favorite}
      onClick={() => handleFavoriteAction(addToFavorites)}
    >
      {addToFavorites[1][0].find((item) => item.id === addToFavorites[0].id) ? (
        <MdOutlineFavorite color="red" size="1.9em" />
      ) : (
        <MdFavoriteBorder size="1.9em" />
      )}
    </button>
  );
};

export default ButtonFavorite;

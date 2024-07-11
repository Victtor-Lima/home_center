import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { handleFavoriteAction } from "../../Utility_functions/handleFavoriteAction";
import { IButtonFavorite } from "../../Utility_functions/types_project/types";
import * as S from "./Styled";

const ButtonFavorite = ({ addToFavorites }: IButtonFavorite) => {
  return (
    <S.ButtonFavorite onClick={() => handleFavoriteAction(addToFavorites)}>
      {addToFavorites[1][0].find((item) => item.id === addToFavorites[0].id) ? (
        <MdOutlineFavorite color="#ff7a44" size="1.9em" />
      ) : (
        <MdFavoriteBorder color="#fd9d77" size="1.9em" />
      )}
    </S.ButtonFavorite>
  );
};

export default ButtonFavorite;

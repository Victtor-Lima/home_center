import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { handleFavoriteAction } from "../../Utility_functions/handleFavoriteAction";
import { IButton } from "../../typesProject/types";
import * as S from "./Styled";

const ButtonFavorite = ({ arrParams }: IButton) => {
  return (
    <S.ButtonFavorite onClick={() => handleFavoriteAction(arrParams)}>
      {arrParams[1][0].find((item) => item.id === arrParams[0].id) ? (
        <MdOutlineFavorite color="#ff7a44" size="1.9em" />
      ) : (
        <MdFavoriteBorder color="#fd9d77" size="1.9em" />
      )}
    </S.ButtonFavorite>
  );
};

export default ButtonFavorite;

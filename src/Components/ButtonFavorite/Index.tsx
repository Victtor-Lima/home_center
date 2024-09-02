import * as S from "./Styled";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { ICard, IProduct } from "../../typesProject/types";
import { useLogin } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";

const ButtonFavorite = ({ product }: ICard) => {
  const { loggedUser, favorite, favoriteProduct } = useLogin();
  const navigate = useNavigate();

  function handleClick(product: IProduct) {
    if (loggedUser) {
      favoriteProduct(product);
    } else {
      navigate("/login");
    }
  }

  return (
    <S.ButtonFavorite onClick={() => handleClick(product)}>
      {favorite?.find((item) => item.id === product.id) ? (
        <MdOutlineFavorite color="#ff7a44" size="1.9em" />
      ) : (
        <MdFavoriteBorder color="#fd9d77" size="1.9em" />
      )}
    </S.ButtonFavorite>
  );
};

export default ButtonFavorite;

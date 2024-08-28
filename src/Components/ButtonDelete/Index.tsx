import * as S from "./Styled";
import { remove } from "../../utilityFunctions/quantityManipulation";
import { IButton } from "../../typesProject/types";
import { useLogin } from "../../context/LoginContext";

const ButtonDelete = ({
  user,
  product,
  arrState,
  nameList,
  children,
  ...props
}: IButton) => {
  function handleRemove() {
    console.log("teste");
    const [favorite, setFavorite] = arrState;

    if (user && favorite) {
      remove(user, product, [favorite, setFavorite], "favorite");
    }
    console.log(favorite);
  }

  return (
    <S.ButtonDelete onClick={() => handleRemove()} {...props}>
      {children}
    </S.ButtonDelete>
  );
};

export default ButtonDelete;

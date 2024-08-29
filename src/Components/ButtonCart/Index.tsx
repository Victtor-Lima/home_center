import * as S from "./Styled";
import { IButton } from "../../typesProject/types";
import { useLogin } from "../../context/LoginContext";

const ButtonCart = ({ product, nameList, children }: IButton) => {
  const { cartProduct } = useLogin();
  return (
    <S.ButtonCart onClick={() => cartProduct(product)}>{children}</S.ButtonCart>
  );
};

export default ButtonCart;

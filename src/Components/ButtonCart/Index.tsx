import * as S from "./Styled";
import { IButtonCart } from "../../typesProject/types";
import { useLogin } from "../../context/LoginContext";

const ButtonCart = ({ product, children }: IButtonCart) => {
  const { cartProduct } = useLogin();
  return (
    <S.ButtonCart onClick={() => cartProduct(product)}>{children}</S.ButtonCart>
  );
};

export default ButtonCart;

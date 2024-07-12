import React, { ButtonHTMLAttributes } from "react";
import * as S from "./Styled";

const ButtonCart: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return <S.ButtonCart {...props}>{props.children}</S.ButtonCart>;
};

export default ButtonCart;

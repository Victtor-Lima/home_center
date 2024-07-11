import React, { ButtonHTMLAttributes } from "react";
import * as S from "../ButtonDelete/Styled";

const ButtonDelete: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return <S.ButtonDelete {...props}>{props.children}</S.ButtonDelete>;
};

export default ButtonDelete;

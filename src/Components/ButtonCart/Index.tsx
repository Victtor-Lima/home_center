import * as S from "./Styled";
import { IButton } from "../../typesProject/types";
import { addToListLocal } from "../../utilityFunctions/addToListLocal";

const ButtonCart = ({ arrParams, children }: IButton) => {
  return (
    <S.ButtonCart onClick={() => addToListLocal(arrParams)}>
      {children}
    </S.ButtonCart>
  );
};

export default ButtonCart;

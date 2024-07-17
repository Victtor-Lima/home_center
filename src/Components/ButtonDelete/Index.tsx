import * as S from "./Styled";
import { remove } from "../../utilityFunctions/quantityManipulation";
import { IButton } from "../../typesProject/types";

const ButtonDelete = ({ arrParams, children, ...props }: IButton) => {
  return (
    <S.ButtonDelete onClick={() => remove(arrParams)} {...props}>
      {children}
    </S.ButtonDelete>
  );
};

export default ButtonDelete;

import * as S from "../ButtonDelete/Styled";
import { remove } from "../../Utility_functions/quantityManipulation";
import { IButton } from "../../typesProject/types";

const ButtonDelete = ({ arrParams, children, ...props }: IButton) => {
  return (
    <S.ButtonDelete onClick={() => remove(arrParams)} {...props}>
      {children}
    </S.ButtonDelete>
  );
};

export default ButtonDelete;

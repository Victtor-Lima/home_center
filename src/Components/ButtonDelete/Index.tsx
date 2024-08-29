import * as S from "./Styled";
import { remove } from "../../utilityFunctions/quantityManipulation";
import { IButton } from "../../typesProject/types";
import { useLogin } from "../../context/LoginContext";

const ButtonDelete = ({
  product,
  arrState,
  nameList,
  children,
  ...props
}: IButton) => {
  const { loggedUser } = useLogin();

  function handleRemove() {
    const [state, setState] = arrState;

    if (loggedUser && state) {
      remove(loggedUser, product, [state, setState], nameList);
    }
  }

  return (
    <S.ButtonDelete onClick={() => handleRemove()} {...props}>
      {children}
    </S.ButtonDelete>
  );
};

export default ButtonDelete;

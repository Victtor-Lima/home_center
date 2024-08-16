import React from "react";
import * as S from "./Styled";
import Form from "../../components/Form/Index";
import { useLogin } from "../../context/LoginContext";
import { bodyColor } from "../../utilityFunctions/pageBackgroundColor";

const Login = () => {
  const { loggedUser } = useLogin();

  React.useEffect(() => bodyColor(), []);

  return (
    <S.LoginContainer>
      {loggedUser ? (
        <>
          <p>USUÁRIO LOGADO</p>
          <button></button>
        </>
      ) : (
        <Form page="signIn" />
      )}
    </S.LoginContainer>
  );
};

export default Login;

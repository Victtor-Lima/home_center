import React from "react";
import * as S from "./Styled";
import { useLogin } from "../../context/LoginContext";
import Input from "../Input/Index";
import { Link } from "react-router-dom";

type PageType = {
  page: "signIn" | "signUp";
};

const Form = ({ page }: PageType) => {
  const { signIn, signUp, userEmail, userPassword } = useLogin();

  return (
    <>
      <S.LoginForm>
        {page === "signIn" ? (
          <S.Title>Acesse e compre TudOline</S.Title>
        ) : (
          <S.Title>Cadastre-se e compre TudOline</S.Title>
        )}
        <Input label="Email" name="email" type="email" {...userEmail} />
        <Input
          label="Password"
          name="password"
          type="password"
          {...userPassword}
        />
        {page === "signIn" ? (
          <>
            <S.AccessButton onClick={(e) => signIn(e)}>Acessar</S.AccessButton>
            <p>
              Não tem uma conta?
              <S.SignUp to="/login/signup">Cadastre-se agora!</S.SignUp>
            </p>
          </>
        ) : (
          <S.AccessButton onClick={(e) => signUp(e)}>Cadastrar</S.AccessButton>
        )}
      </S.LoginForm>
    </>
  );
};

export default Form;

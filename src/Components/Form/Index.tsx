import * as S from "./Styled";
import { useLogin } from "../../context/LoginContext";
import Input from "../Input/Index";

type PageType = {
  page: "signIn" | "signUp";
};

const Form = ({ page }: PageType) => {
  const { signIn, signUp, userName, userEmail, userPassword } = useLogin();

  return (
    <>
      <S.LoginForm>
        {page === "signIn" ? (
          <S.Title>Acesse e compre TudOline</S.Title>
        ) : (
          <>
            <S.Title>Cadastre-se e compre TudOline</S.Title>
            <Input label="Usuário" name="username" type="text" {...userName} />
          </>
        )}
        <Input label="Email" name="email" type="email" {...userEmail} />
        <Input
          label="Senha"
          name="password"
          type="password"
          {...userPassword}
        />
        {page === "signIn" ? (
          <>
            <S.AccessButton onClick={(e) => signIn(e)}>Acessar</S.AccessButton>
            <p>
              Não tem uma conta?
              <S.SignUp to="/home_center/login/signup">
                Cadastre-se agora!
              </S.SignUp>
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

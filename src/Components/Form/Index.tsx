import React from "react";
import { useLogin } from "../../context/LoginContext";
import Input from "../Input/Index";

type PageType = {
  page: "signIn" | "signUp";
};

const Form = ({ page }: PageType) => {
  const { signIn, signUp, userEmail, userPassword } = useLogin();

  return (
    <>
      <form>
        <Input label="Email" name="email" type="email" {...userEmail} />
        <Input
          label="Password"
          name="password"
          type="password"
          {...userPassword}
        />
        {page === "signIn" ? (
          <button onClick={(e) => signIn(e)}>Acessar</button>
        ) : (
          <button onClick={(e) => signUp(e)}>Cadastrar</button>
        )}
      </form>
    </>
  );
};

export default Form;

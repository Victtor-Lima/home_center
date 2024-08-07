import React from "react";
import { useLogin } from "../../context/LoginContext";
import SignUp from "../../pages/signUp/Index";

type PageType = {
  page: "signIn" | "signUp";
};

const Form = ({ page }: PageType) => {
  const { setEmail, setPassword, setConfirmPassword, signIn, signUp } =
    useLogin();

  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      {page === "signUp" ? (
        <div>
          <label htmlFor="confirmPassword">Confirmar senha</label>
          <input
            type="password"
            id="confirmPassword"
            onChange={({ target }) => setConfirmPassword(target.value)}
          />
        </div>
      ) : (
        false
      )}
      {page === "signIn" ? (
        <button onClick={(e) => signIn(e)}>Acessar</button>
      ) : (
        <button onClick={(e) => signUp(e)}>Cadastrar</button>
      )}
    </form>
  );
};

export default Form;

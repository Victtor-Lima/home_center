import React, { createContext } from "react";
import { Verifications } from "../../utilityFunctions/accessFunctions/verifications";

type LoginTypeContext = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  signIn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const LoginContext = createContext<LoginTypeContext | null>(null);

export const useLogin = () => {
  const context = React.useContext(LoginContext);
  if (!context) throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function signIn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(email, password);
    event.preventDefault();

    const isEmailValid = new Verifications().isEmailValid(email);
    const isPasswordValid = new Verifications().isPasswordValid(password);

    if (!isEmailValid) {
      alert("Email incorreto");
      return;
    }
    if (!isPasswordValid) {
      alert("Senha incorreta");
      return;
    }
    console.log(isEmailValid);
    console.log(isPasswordValid);
  }

  return (
    <LoginContext.Provider
      value={{ email, setEmail, password, setPassword, signIn }}
    >
      {children}
    </LoginContext.Provider>
  );
};

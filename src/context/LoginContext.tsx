import React, { createContext } from "react";
import { Verifications } from "../utilityFunctions/accessFunctions/verifications";

type LoginTypeContext = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  signIn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  signUp: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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
  const [confirmPassword, setConfirmPassword] = React.useState("");

  function signIn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    if (loginDataVerification(email, password)) {
      login(email);
    }
  }

  function signUp(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    if (loginDataVerification(email, password, confirmPassword)) {
      createUser(email, password);
      window.location.href = "/login";
    }
  }

  return (
    <LoginContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        signIn,
        signUp,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

function loginDataVerification(
  email: string,
  password: string,
  confirmPassword?: string
) {
  const isEmailValid = new Verifications().isEmailValid(email);
  const isPasswordValid = new Verifications().isPasswordValid(password);
  const isConfirmPassword = confirmPassword
    ? new Verifications().passwordConfirmation(password, confirmPassword)
    : false;

  if (!isEmailValid) {
    alert("Email incorreto");
    return false;
  }
  if (!isPasswordValid) {
    alert("Senha incorreta");
    return false;
  }
  if (confirmPassword && !isConfirmPassword) {
    alert("Confirmação de senha incorreta");
    return false;
  }
  console.log(isEmailValid);
  console.log(isPasswordValid);

  return true;
}

type UserType = {
  email: string;
  password: string;
};

function login(email: string) {
  const local = localStorage.getItem("registrations");
  const registrations: Array<UserType> = local ? JSON.parse(local) : false;
  const isUserValid = registrations
    ? registrations.some((user) => user.email === email)
    : false;

  if (registrations && isUserValid) {
    alert("logado");
  } else {
    window.location.href = "/login/signup";
    console.log(registrations);
  }
}

function createUser(email: string, password: string) {
  const user = { email, password };
  const registrations = localStorage.getItem("registrations");

  if (!registrations) {
    localStorage.setItem("registrations", JSON.stringify([user]));
  } else if (registrations) {
    const registrationsUp = JSON.parse(registrations);

    localStorage.setItem(
      "registrations",
      JSON.stringify([...registrationsUp, user])
    );
  }
}

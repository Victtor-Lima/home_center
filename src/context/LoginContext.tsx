import React from "react";
import { createUser } from "../utilityFunctions/accessFunctions/createUser";
import { useValidateInput } from "../utilityFunctions/hooks/useValidateInput";

export type SignType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: ({ target }: { target: EventTarget & HTMLInputElement }) => void;
  error: string | null;
  validate: () => boolean;
  onBlur: () => boolean;
};

type LoginTypeContext = {
  loggedUser: User | null;
  userEmail: SignType;
  userPassword: SignType;
  signIn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  signUp: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

type User = {
  userName: string;
  userId: number;
};

export type UserType = {
  email: string;
  password: string;
  id: number;
};

const LoginContext = React.createContext<LoginTypeContext | null>(null);

export const useLogin = () => {
  const context = React.useContext(LoginContext);
  if (!context) throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedUser, setLoggedUser] = React.useState<User | null>(null);
  const userEmail = useValidateInput("email");
  const userPassword = useValidateInput("password");

  React.useMemo(() => {
    const islogged = localStorage.getItem("user");
    if (islogged) {
      const user: User = JSON.parse(islogged);
      setLoggedUser(user);
    }
  }, []);

  console.log(loggedUser);

  function signIn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    if (userEmail.validate() && userPassword.validate()) {
      login(userEmail.value, userPassword.value);
    }
  }

  function login(email: string, password: string) {
    const local = localStorage.getItem("registrations");
    const registrations: Array<UserType> = local ? JSON.parse(local) : false;
    const isUserValid = registrations
      ? registrations.find(
          (user) => user.email === email && user.password === password
        )
      : false;

    if (registrations && isUserValid) {
      const user: User = { userName: email, userId: isUserValid.id };
      localStorage.setItem("user", JSON.stringify(user));
      setLoggedUser(user);
    } else {
      window.location.href = "/login/signup";
      console.log(registrations);
    }
  }

  function signUp(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    if (userEmail.validate() && userPassword.validate()) {
      createUser(userEmail.value, userPassword.value);
      window.location.href = "/login";
    }
  }

  return (
    <LoginContext.Provider
      value={{
        loggedUser,
        userEmail,
        userPassword,
        signIn,
        signUp,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

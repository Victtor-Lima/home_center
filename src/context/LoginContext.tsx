import React from "react";
import { createUser } from "../utilityFunctions/accessFunctions/createUser";
import { useValidateInput } from "../utilityFunctions/hooks/useValidateInput";
import { useNavigate } from "react-router-dom";
import { getLocal, setLocal } from "../utilityFunctions/localstorage_funcs";
import { IProduct } from "../typesProject/types";
import {
  isUserValid,
  updateListCart,
  updateListFavorite,
  updateRegistrations,
} from "../utilityFunctions/contextFuncs";

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
  userName: SignType;
  userEmail: SignType;
  userPassword: SignType;
  favorite: IProduct[] | null;
  setFavorite: React.Dispatch<React.SetStateAction<IProduct[] | null>>;
  cart: IProduct[] | null;
  setCart: React.Dispatch<React.SetStateAction<IProduct[] | null>>;
  favoriteProduct: (product: IProduct) => void;
  cartProduct: (product: IProduct) => void;
  signIn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  signUp: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  logout: () => void;
};

export type User = {
  userName: string;
  userEmail: string;
  userId: number;
};

export type UserType = {
  name: string;
  email: string;
  password: string;
  id: number;
  favorite: IProduct[];
  cart: IProduct[];
};

export const LoginContext = React.createContext<LoginTypeContext | null>(null);

export const useLogin = () => {
  const context = React.useContext(LoginContext);
  if (!context) throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedUser, setLoggedUser] = React.useState<User | null>(null);
  const userName = useValidateInput("username");
  const userEmail = useValidateInput("email");
  const userPassword = useValidateInput("password");
  const [favorite, setFavorite] = React.useState<IProduct[] | null>([]);
  const [cart, setCart] = React.useState<IProduct[] | null>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const islogged = localStorage.getItem("user");
    if (islogged) {
      const user: User = JSON.parse(islogged);
      setLoggedUser(user);
    }
  }, []);

  React.useEffect(() => {
    const user = isUserValid(loggedUser);

    if (user.isUserValid) {
      setFavorite(user.isUserValid.favorite);
      setCart(user.isUserValid.cart);
    } else {
      setFavorite(null);
    }
  }, [loggedUser]);

  function signIn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    const registrations: Array<UserType> = getLocal("registrations");
    const isUserValid = registrations.find((user) => {
      return (
        user.email === userEmail.value && user.password === userPassword.value
      );
    });

    if (registrations && isUserValid) {
      const user: User = {
        userName: isUserValid.name,
        userEmail: userEmail.value,
        userId: isUserValid.id,
      };

      localStorage.setItem("user", JSON.stringify(user));
      setLoggedUser(user);
    } else {
      navigate("/login/signup");
    }
  }

  function signUp(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    if (
      userName.validate() &&
      userEmail.validate() &&
      userPassword.validate()
    ) {
      createUser(userName.value, userEmail.value, userPassword.value);
      navigate("/login");
    }
  }

  function logout() {
    localStorage.removeItem("user");
    setLoggedUser(null);
    navigate("/");
  }

  function favoriteProduct(product: IProduct) {
    const user = isUserValid(loggedUser);

    const isOnTheList = user.isUserValid?.favorite.find((item) => {
      return item.id === product.id;
    });

    if (user.isUserValid) {
      updateListFavorite(user.isUserValid, isOnTheList, product);
    }

    if (user.isUserValid) {
      setFavorite(user.isUserValid.favorite);
      const newRegistrations = updateRegistrations(
        user.isUserValid,
        user.registrations
      );
      setLocal("registrations", newRegistrations);
    }
  }

  function cartProduct(product: IProduct) {
    const user = isUserValid(loggedUser);

    const isOnTheList = user.isUserValid?.cart.find((item) => {
      return item.id === product.id;
    });

    if (user.isUserValid) {
      updateListCart(user.isUserValid, isOnTheList, product);
    }

    if (user.isUserValid) {
      setCart(user.isUserValid.cart);
      const newRegistrations = updateRegistrations(
        user.isUserValid,
        user.registrations
      );
      setLocal("registrations", newRegistrations);
    }
  }

  return (
    <LoginContext.Provider
      value={{
        loggedUser,
        userName,
        userEmail,
        userPassword,
        favorite,
        setFavorite,
        cart,
        setCart,
        favoriteProduct,
        cartProduct,
        signIn,
        signUp,
        logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

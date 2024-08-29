import React from "react";
import { createUser } from "../utilityFunctions/accessFunctions/createUser";
import { useValidateInput } from "../utilityFunctions/hooks/useValidateInput";
import { useNavigate } from "react-router-dom";
import { getLocal, setLocal } from "../utilityFunctions/localstorage_funcs";
import { IProduct } from "../typesProject/types";

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
    const local = localStorage.getItem("registrations");
    const registrations: Array<UserType> = local ? JSON.parse(local) : false;
    const user = registrations.find((user) => user.id === loggedUser?.userId);

    if (user) {
      setFavorite(user.favorite);
      setCart(user.cart);
    } else {
      setFavorite(null);
    }
  }, [loggedUser]);

  function signIn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    if (userEmail.validate() && userPassword.validate()) {
      login(userEmail.value, userPassword.value);
    }
  }

  function login(email: string, password: string) {
    const registrations: Array<UserType> = getLocal("registrations");
    const isUserValid = registrations
      ? registrations.find(
          (user) => user.email === email && user.password === password
        )
      : false;

    if (registrations && isUserValid) {
      const user: User = {
        userName: isUserValid.name,
        userEmail: email,
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
    const registrations: Array<UserType> = getLocal("registrations");
    const isUserValid = registrations.find((user) => {
      return user.id === loggedUser?.userId;
    });

    const isOnTheList = isUserValid?.favorite.find((item) => {
      return item.id === product.id;
    });

    if (isUserValid && isOnTheList) {
      const updateFavorites = [...isUserValid.favorite];
      updateFavorites?.splice(updateFavorites.indexOf(isOnTheList), 1);
      isUserValid.favorite = updateFavorites;
      setFavorite(isUserValid.favorite);
      const newRegistrations = updateRegistrations(isUserValid, registrations);
      setLocal("registrations", newRegistrations);
    } else if (isUserValid && !isOnTheList) {
      const newFavorites = [...isUserValid.favorite, product];
      isUserValid.favorite = newFavorites;
      setFavorite(isUserValid.favorite);
      const newRegistrations = updateRegistrations(isUserValid, registrations);
      localStorage.setItem("registrations", JSON.stringify(newRegistrations));
    }
  }

  function cartProduct(product: IProduct) {
    console.log("teste");
    const registrations: Array<UserType> = getLocal("registrations");
    const isUserValid = registrations.find((user) => {
      return user.id === loggedUser?.userId;
    });

    const isOnTheList = isUserValid?.cart.find((item) => {
      return item.id === product.id;
    });

    if (isUserValid && isOnTheList) {
      const newArray = isUserValid.cart.map((el) => {
        if (el.id === product.id) {
          el.amount += 1;
        }
        return el;
      });
      isUserValid.cart = newArray;
      setCart(isUserValid.cart);
      const newRegistrations = updateRegistrations(isUserValid, registrations);
      setLocal("registrations", newRegistrations);
    } else if (isUserValid && !isOnTheList) {
      product.amount = 1;
      const updateCart = [...isUserValid.cart, product];
      isUserValid.cart = updateCart;
      setCart(isUserValid.cart);
      const newRegistrations = updateRegistrations(isUserValid, registrations);
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

export function updateRegistrations(
  isUserValid: UserType,
  registrations: UserType[]
) {
  return registrations.map((user) => {
    if (user.id === isUserValid.id) {
      user = isUserValid;
    }
    return user;
  });
}

import { User, UserType } from "../context/LoginContext";
import { IProduct } from "../typesProject/types";
import { getLocal } from "./localstorage_funcs";

export function isUserValid(loggedUser: User | null) {
  const registrations: Array<UserType> = getLocal("registrations");
  const isUserValid = registrations.find((user) => {
    return user.id === loggedUser?.userId;
  });

  return { isUserValid, registrations };
}

export function updateListFavorite(
  user: UserType,
  isOnTheList: IProduct | undefined,
  product: IProduct
) {
  if (user && isOnTheList) {
    const updateFavorites = [...user.favorite];
    updateFavorites?.splice(updateFavorites.indexOf(isOnTheList), 1);
    user.favorite = updateFavorites;
  } else if (user && !isOnTheList) {
    const newFavorites = [...user.favorite, product];
    user.favorite = newFavorites;
  }
}

export function updateListCart(
  user: UserType,
  isOnTheList: IProduct | undefined,
  product: IProduct
) {
  if (user && isOnTheList) {
    const newArray = user.cart.map((el) => {
      if (el.id === product.id) {
        el.amount += 1;
      }
      return el;
    });
    user.cart = newArray;
  } else if (user && !isOnTheList) {
    product.amount = 1;
    const updateCart = [...user.cart, product];
    user.cart = updateCart;
  }
}

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

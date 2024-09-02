import { ILoggedUser, IProduct, IUserData } from "../typesProject/types";
import { getLocal } from "./localstorage_funcs";

export function isUserValid(loggedUser: ILoggedUser | null) {
  const registrations: Array<IUserData> = getLocal("registrations");
  const isUserValid = registrations.find((user) => {
    return user.id === loggedUser?.userId;
  });

  return { isUserValid: isUserValid, registrations: registrations };
}

export function updateListFavorite(
  user: IUserData,
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
  user: IUserData,
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
  isUserValid: IUserData,
  registrations: IUserData[]
) {
  return registrations.map((user) => {
    if (user.id === isUserValid.id) {
      user = isUserValid;
    }
    return user;
  });
}

import { getLocal, setLocal } from "./localstorage_funcs";
import { ILoggedUser, IProduct, IUserData } from "../typesProject/types";
import { updateRegistrations } from "./contextFuncs";

export function addUnit(
  user: ILoggedUser | null,
  product: IProduct,
  state: IProduct[],
  setState: React.Dispatch<React.SetStateAction<IProduct[] | null>>
) {
  const registrations: Array<IUserData> = getLocal("registrations");
  const isUserValid = registrations.find((register) => {
    return register.id === user?.userId;
  });

  if (isUserValid) {
    const updateState = state.map((item) => {
      if (item.id === product.id) {
        item.amount += 1;
      }
      return item;
    });
    setState(updateState);

    isUserValid.cart = updateState;
    const newRegistrations = updateRegistrations(isUserValid, registrations);
    setLocal("registrations", newRegistrations);
  }
}

export function removeUnit(
  user: ILoggedUser | null,
  product: IProduct,
  state: IProduct[],
  setState: React.Dispatch<React.SetStateAction<IProduct[] | null>>
) {
  const registrations: Array<IUserData> = getLocal("registrations");
  const isUserValid = registrations.find((register) => {
    return register.id === user?.userId;
  });

  if (isUserValid) {
    const updateState = state.map((item) => {
      if (item.id === product.id && item.amount >= 2) {
        item.amount -= 1;
      }
      return item;
    });
    setState(updateState);

    isUserValid.cart = updateState;
    const newRegistrations = updateRegistrations(isUserValid, registrations);
    setLocal("registrations", newRegistrations);
  }
}

export function remove(
  user: ILoggedUser,
  product: IProduct,
  arrState: [
    IProduct[],
    React.Dispatch<React.SetStateAction<IProduct[] | null>>
  ],
  nameList: "favorite" | "cart"
) {
  const [state, setState] = arrState;
  const registrations: Array<IUserData> = getLocal("registrations");
  const isUserValid = registrations.find((register) => {
    return register.id === user.userId;
  });

  if (isUserValid) {
    const updateState = state.filter((item) => item.id !== product.id);
    setState(updateState);

    isUserValid[nameList] = updateState;
    const newRegistrations = updateRegistrations(isUserValid, registrations);
    setLocal("registrations", newRegistrations);
  }
}

export function total(cart: IProduct[]) {
  const priceTotal: string = cart
    .map((item) => item.price * item.amount)
    .reduce((acum, value) => acum + value, 0)
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  return priceTotal;
}

export function somar(cart: IProduct[]) {
  return cart
    .map((item) => item.amount)
    .reduce((result, value) => result + value, 0);
}

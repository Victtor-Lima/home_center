import { setLocal } from "./localstorage_funcs";
import { IProduct } from "../typesProject/types";

export function addUnit(
  product: IProduct,
  state: IProduct[],
  setState: React.Dispatch<React.SetStateAction<IProduct[]>>
) {
  const updateState = state.map((item) => {
    if (item.id === product.id) {
      item.amount += 1;
    }
    return item;
  });
  setState(updateState);
  setLocal("cart", updateState);
}

export function removeUnit(
  product: IProduct,
  state: IProduct[],
  setState: React.Dispatch<React.SetStateAction<IProduct[]>>
) {
  const updateState = state.map((item) => {
    if (item.id === product.id && item.amount >= 2) {
      item.amount -= 1;
    }
    return item;
  });
  setState(updateState);
  setLocal("cart", updateState);
}

export function remove(
  arrDelete: [
    IProduct,
    [IProduct[], React.Dispatch<React.SetStateAction<IProduct[]>>],
    string
  ]
) {
  const [product, arrState, nameList] = arrDelete;
  const [state, setState] = arrState;

  const updateState = state.filter((item) => item.id !== product.id);
  setState(updateState);
  setLocal(nameList, updateState);
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

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

export function reduceUnit(
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

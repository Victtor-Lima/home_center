import { setLocal } from "./localstorage_funcs";
import { IProduct } from "./types_project/types";

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
  product: IProduct,
  arrState: [IProduct[], React.Dispatch<React.SetStateAction<IProduct[]>>],
  nameList: string
) {
  const [state, setState] = arrState;

  const updateState = state.filter((item) => item.id !== product.id);
  setState(updateState);
  setLocal(nameList, updateState);
}

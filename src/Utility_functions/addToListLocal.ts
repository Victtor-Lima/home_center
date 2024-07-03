import React from "react";
import { setLocal } from "./localstorage_funcs";
import { IProduct } from "./types_project/types";

export function addToListLocal(
  arrState: [
    IProduct,
    [IProduct[], React.Dispatch<React.SetStateAction<IProduct[]>>],
    string
  ]
) {
  const [product, arrayState, nameList] = arrState;
  const [array, setArray] = arrayState;
  const el = array.find((el) => el.id === product.id);

  if (el) {
    const newArray = addUnit(array, product);
    setArray(newArray);
    setLocal(nameList, newArray);
  } else {
    product.amount = 1;
    const newArray = [...array, product];
    setArray(newArray);
    setLocal(nameList, newArray);
  }
}

function addUnit(array: IProduct[], product: IProduct) {
  return array.map((el) => {
    if (el.id === product.id) {
      el.amount += 1;
    }
    return el;
  });
}

import { setLocal } from "./localstorage_funcs";
import { IProduct } from "./types_project/types";

export function handleFavoriteAction(
  arrParam: [
    IProduct,
    [IProduct[], React.Dispatch<React.SetStateAction<IProduct[]>>],
    string
  ]
) {
  const [product, arrFavorite, nameLocal] = arrParam;
  const [favorite, setFavorite] = arrFavorite;
  const item = favorite.find((item) => item.id === product.id);

  if (item) {
    const newArray = [...favorite];
    alterarArray(newArray, item);
    setFavorite(newArray);
    nameLocal && setLocal(nameLocal, newArray);
  } else {
    const newElementInArray = [...favorite, product];
    setFavorite(newElementInArray);
    nameLocal && setLocal(nameLocal, newElementInArray);
  }
}

function alterarArray(array: IProduct[], obj: IProduct) {
  return array.splice(array.indexOf(obj), 1);
}

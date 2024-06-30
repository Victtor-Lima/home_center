import { setLocal } from "./localstorage_funcs";
import { Product } from "./types_project/types";

export function handleFavoriteAction(
  arrParam: [
    Product,
    [Product[], React.Dispatch<React.SetStateAction<Product[]>>],
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

function alterarArray(array: Product[], obj: Product) {
  return array.splice(array.indexOf(obj), 1);
}

import { setLocal } from "./localstorage_funcs";

export function setUrl(
  setState: React.Dispatch<React.SetStateAction<string | null>>,
  idUrl: string
) {
  setState(`https://api.mercadolibre.com/sites/MLB/search?${idUrl}`);
  setLocal("currentPage", idUrl);
}

import React from "react";
import {
  IDataContext,
  Obj,
  SearchByCategory,
} from "../Utility_functions/types_project/types";
import { fetchData } from "../Utility_functions/fetchData";

export const DataContext = React.createContext<IDataContext | null>(null);

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [urlProducts, seturlProducts] = React.useState<string | null>(null);
  const [categories, setCategories] = React.useState<Array<Obj> | null>(null);
  const [data, setData] = React.useState<SearchByCategory | null>(null);

  React.useEffect(() => {
    async function requestProducts() {
      const url = `${urlProducts}`;
      const data = await fetchData<SearchByCategory>(url);
      setData(data);
    }

    if (urlProducts) {
      requestProducts();
    }
  }, [urlProducts]);

  React.useEffect(() => {
    async function fetchCatecories() {
      const categoriesResult = await fetchData<Array<Obj>>(
        `https://api.mercadolibre.com/sites/MLB/categories`
      );
      setCategories(categoriesResult);
    }
    fetchCatecories();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        urlProducts,
        seturlProducts,
        categories,
        setCategories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

import React from "react";
import {
  IDataContext,
  SearchByCategory,
} from "../Utility_functions/types_project/types";
import { fetchData } from "../Hooks/fetchData";

export const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [urlProducts, seturlProducts] = React.useState<string | null>(null);
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

  return (
    <DataContext.Provider value={{ data, urlProducts, seturlProducts }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

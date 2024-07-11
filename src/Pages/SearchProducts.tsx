import React from "react";
import { fetchData } from "../Utility_functions/fetchData";
import {
  IProduct,
  SearchByCategory,
} from "../Utility_functions/types_project/types";
import { useParams } from "react-router-dom";
import styles from "../Style/SearchProducts.module.css";
import CardProduct from "../Components/CardProduct/Index";

const SearchProducts = () => {
  const [data, setData] = React.useState<SearchByCategory | null>(null);
  const [favorite, setFavorite] = React.useState<IProduct[]>([]);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetch() {
      const data = await fetchData<SearchByCategory>(
        `https://api.mercadolibre.com/sites/MLB/search?q=${id?.replace(
          /-/g,
          " "
        )}`
      );
      setData(data);
    }
    fetch();
  }, [id]);

  if (data === null) return "Carregando...";
  return (
    <section className={styles.container_earchproducts}>
      <ul className={styles.container_cards_searchproducts}>
        {data.results.map((product) => (
          <li key={product.id}>
            <CardProduct
              product={product}
              arrFavorite={[favorite, setFavorite]}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SearchProducts;

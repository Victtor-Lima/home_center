import React, { useEffect } from "react";
import CardList from "../Components/CardList";
import { useData } from "../Context/DataContext";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
  const { data, seturlProducts } = useData();
  const { id } = useParams();

  useEffect(() => {
    seturlProducts(`https://api.mercadolibre.com/sites/MLB/search?${id}`);
  }, [id, seturlProducts]);

  if (data === null) return "Carregando...";
  return (
    <section>
      <CardList data={data} />
    </section>
  );
};

export default CategoryProducts;

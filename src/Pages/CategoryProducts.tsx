import React from "react";
import CardList from "../Components/CardList";
import { useData } from "../Context/DataContext";

const CategoryProducts = () => {
  const { data } = useData();

  if (data === null) return "Carregando...";
  return (
    <section>
      <CardList data={data} />
    </section>
  );
};

export default CategoryProducts;

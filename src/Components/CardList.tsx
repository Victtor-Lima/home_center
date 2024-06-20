import React from "react";
import { SearchByCategory } from "../App";
import Card from "./Card";

const styleContainer: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "15px",
  flexWrap: "wrap",
};

const CardList = ({ data }: { data: SearchByCategory }) => {
  console.log(data);
  return (
    <>
      <section style={styleContainer}>
        {data.results.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export default CardList;

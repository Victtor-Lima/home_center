import React from "react";
import Card from "./Card";
import { SearchByCategory } from "../App";
import styles from "../Style/CardList.module.css";

const CardList = ({ data }: { data: SearchByCategory }) => {
  console.log(data);

  return (
    <section className={styles.wrapper_card}>
      <ul className={styles.wrapper_container_card_product}>
        {data.results.map((product) => (
          <li key={product.id}>
            <Card product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CardList;

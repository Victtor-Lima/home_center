import React from "react";
import Card from "./Card";
import styles from "../Style/CardList.module.css";
import { SearchByCategory } from "../Utility_functions/types_project/types";

const CardList = ({ data }: { data: SearchByCategory }) => {
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

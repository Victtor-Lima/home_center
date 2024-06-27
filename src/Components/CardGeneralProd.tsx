import React from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../Context/DataContext";
import { Obj } from "../Utility_functions/types_project/types";
import styles from "../Style/CardGeneralProd.module.css";

const CardGeneralProd = ({ category }: { category: Obj }) => {
  const { seturlProducts } = useData();

  console.log(category);

  return (
    <NavLink
      className={styles.link_cardgeneralprod}
      to={`/c/category=${category.id}`}
      // onClick={() => setUrl("category=MLB1574")}
    >
      <div className={styles.container_content}>
        <h3>{category.name}</h3>
      </div>
    </NavLink>
  );
};

export default CardGeneralProd;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import DataContext from "../Context/DataContext";
import { Obj } from "../Utility_functions/types_project/types";
import styles from "../Style/CardGeneralProd.module.css";

const CardGeneralProd = () => {
  const context = useContext(DataContext);

  function setUrl(id: string) {
    context?.seturlProducts(
      `https://api.mercadolibre.com/sites/MLB/search?category=${id}`
    );
  }

  return (
    <>
      <NavLink
        className={styles.link_cardgeneralprod}
        to={`/c/casa-moveis-decoracao`}
        onClick={() => setUrl("MLB1574")}
      >
        <div className={styles.container_content}>
          <h3>Casa, Móveis, Decoração</h3>
        </div>
      </NavLink>
      <NavLink
        className={styles.link_cardgeneralprod}
        to={`/c/construcao`}
        onClick={() => setUrl("MLB1500")}
      >
        <div className={styles.container_content}>
          <h3>Construcao</h3>
        </div>
      </NavLink>
      <NavLink
        className={styles.link_cardgeneralprod}
        to={`/c/eletrodomesticos`}
        onClick={() => setUrl("MLB1574")}
      >
        <div className={styles.container_content}>
          <h3>Eletrodomesticos</h3>
        </div>
      </NavLink>
    </>
  );
};

export default CardGeneralProd;

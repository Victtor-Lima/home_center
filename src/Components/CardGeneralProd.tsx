import { NavLink } from "react-router-dom";
import styles from "../Style/CardGeneralProd.module.css";

const CardGeneralProd = () => {
  return (
    <>
      <NavLink
        className={styles.link_cardgeneralprod}
        to={`/c/casa-moveis-decoracao/MLB1574`}
      >
        <div className={styles.container_content}>
          <h3>Casa, Móveis, Decoração</h3>
        </div>
      </NavLink>
      <NavLink
        className={styles.link_cardgeneralprod}
        to={`/c/construcao/MLB1500`}
      >
        <div className={styles.container_content}>
          <h3>Construcao</h3>
        </div>
      </NavLink>
      <NavLink
        className={styles.link_cardgeneralprod}
        to={`/c/eletrodomesticos/MLB1574`}
      >
        <div className={styles.container_content}>
          <h3>Eletrodomesticos</h3>
        </div>
      </NavLink>
    </>
  );
};

export default CardGeneralProd;

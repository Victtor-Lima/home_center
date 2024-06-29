import React from "react";
import CardGeneralProd from "../Components/CardGeneralProd";
import styles from "../Style/Home.module.css";

const Home = () => {
  return (
    <section className={styles.wrapper_home}>
      <CardGeneralProd />
    </section>
  );
};

export default Home;

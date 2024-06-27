import React from "react";
import { Link } from "react-router-dom";
import InputSearch from "./InputSearch";
import styles from "../Style/Header.module.css";
import logo from "../../public/logo.svg";
import icfavorite from "../../public/icon_favorite.svg";
import iccart from "../../public/icon_cart.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link_tohome}>
        <img className={styles.logo} src={logo} alt="Logo da Home Center" />
      </Link>
      <InputSearch />
      <Link to="/favorite" className={styles.link_tohome}>
        <img
          className="centralizado"
          src={icfavorite}
          alt="link para favoritados"
        />
      </Link>
      <Link to="/cart" className={styles.link_tohome}>
        <img
          className="centralizado"
          src={iccart}
          alt="link para carrinho de produtos"
        />
      </Link>
    </header>
  );
};

export default Header;

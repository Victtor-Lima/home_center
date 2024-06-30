import React from "react";
import { Link } from "react-router-dom";
import DataContext from "../Context/DataContext";
import styles from "../Style/NavSidebar.module.css";

const NavSidebar = () => {
  const context = React.useContext(DataContext);

  function setUrl(idUrl: string) {
    context?.seturlProducts(
      `https://api.mercadolibre.com/sites/MLB/search?${idUrl}`
    );
  }

  if (context === null) return;
  if (context.data === null) return;
  return (
    <section className={styles.wrapper_navsidebar}>
      {context.data.available_filters
        .filter((filter) => filter.id === "category")
        .map((filter) => (
          <div>
            <h3 className={styles.navsidebar_categorie_title}>{filter.name}</h3>
            <ul>
              {filter.values.map((value) => (
                <li className={styles.navsidebar_categorie_option}>
                  <Link
                    key={value.id}
                    to={`/${value.id}`}
                    onClick={() => setUrl(`category=${value.id}`)}
                  >
                    <span>{value.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
};

export default NavSidebar;

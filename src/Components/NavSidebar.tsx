import { Link } from "react-router-dom";
import styles from "../Style/NavSidebar.module.css";
import { SearchByCategory } from "../Utility_functions/types_project/types";
import { normalizeString } from "../Utility_functions/normalizeString";

const NavSidebar = ({ data }: { data: SearchByCategory }) => {
  if (data === null) return;
  return (
    <section className={styles.wrapper_navsidebar}>
      {data.available_filters
        .filter((filter) => filter.id === "category")
        .map((filter) => (
          <div key={filter.id}>
            <h3 className={styles.navsidebar_categorie_title}>{filter.name}</h3>
            <ul>
              {filter.values.map((value) => (
                <li
                  key={value.id}
                  className={styles.navsidebar_categorie_option}
                >
                  <Link to={`/${normalizeString(value.name)}/${value.id}`}>
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

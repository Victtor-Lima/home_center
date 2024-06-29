import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import DataContext from "../Context/DataContext";

const NavSidebar = () => {
  const context = useContext(DataContext);

  const location = useLocation();
  function setUrl(idUrl: string) {
    context?.seturlProducts(
      `https://api.mercadolibre.com/sites/MLB/search?${idUrl}`
    );
  }

  if (context === null) return;
  if (context.data === null) return;
  return (
    <section>
      {context.data.available_filters
        .filter((filter) => filter.id === "category")
        .map((filter) => (
          <div>
            <h3>{filter.name}</h3>
            <ul>
              {filter.values.map((value) => (
                <li>
                  <Link
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

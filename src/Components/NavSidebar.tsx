import React from "react";
import { SearchByCategory } from "../Utility_functions/types_project/types";
import { Link, useParams } from "react-router-dom";
import { useData } from "../Context/DataContext";

const optionsFilters = ["category", "state", "discount", "price"];

const NavSidebar = ({ data }: { data: SearchByCategory }) => {
  const { seturlProducts } = useData();
  const { id } = useParams();

  function setUrl(idUrl: string) {
    seturlProducts(`https://api.mercadolibre.com/sites/MLB/search?${idUrl}`);
  }

  return (
    <section>
      {data.available_filters
        .filter((filter) => optionsFilters.includes(filter.id))
        .map((filter) => (
          <div>
            <h3>{filter.name}</h3>
            <ul>
              {filter.values.map((value) => (
                <li>
                  <Link
                    to={`/c/${id}/category=${value.id}`}
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

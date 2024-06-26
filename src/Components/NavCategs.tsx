import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useData } from "../Context/DataContext";
import { setLocal } from "../Utility_functions/localstorage_funcs";

const NavCategs = () => {
  const { seturlProducts } = useData();

  function setUrl(idUrl: string) {
    seturlProducts(`https://api.mercadolibre.com/sites/MLB/search?${idUrl}`);
  }

  return (
    <div>
      <NavLink
        to={`/c/category=MLB1574`}
        onClick={() => setUrl("category=MLB1574")}
      >
        Casa, Móveis e Decoração
      </NavLink>
      <NavLink
        to={`/c/category=MLB1500`}
        onClick={() => setUrl("category=MLB1500")}
      >
        Construção
      </NavLink>
      <NavLink
        to={`/c/category=MLB5726`}
        onClick={() => setUrl("category=MLB5726")}
      >
        Eletrodomésticos
      </NavLink>
    </div>
  );
};

export default NavCategs;

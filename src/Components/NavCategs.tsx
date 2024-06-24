import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../Context/DataContext";
import { setLocal } from "../Utility_functions/localstorage_funcs";

const NavCategs = () => {
  const { data, seturlProducts } = useData();

  function setUrl(idUrl: string) {
    seturlProducts(`https://api.mercadolibre.com/sites/MLB/search?${idUrl}`);
    setLocal("currentPage", idUrl);
  }

  console.log(data);
  return (
    <div>
      <Link
        to={`/c/category=MLB1574`}
        onClick={() => setUrl("category=MLB1574")}
      >
        Casa, Móveis e Decoração
      </Link>
      <Link
        to={`/c/category=MLB1500`}
        onClick={() => setUrl("category=MLB1500")}
      >
        Construção
      </Link>
      <Link
        to={`/c/category=MLB5726`}
        onClick={() => setUrl("category=MLB5726")}
      >
        Eletrodomésticos
      </Link>
    </div>
  );
};

export default NavCategs;

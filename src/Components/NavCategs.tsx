import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../Context/DataContext";
const id_category = ["MLB1574", "MLB1500", "MLB5726"];

const NavCategs = () => {
  const { data, seturlProducts } = useData();

  function setUrl(idUrl: string) {
    seturlProducts(`https://api.mercadolibre.com/sites/MLB/search?${idUrl}`);
  }

  console.log(data);
  return (
    <div>
      <Link to={`/category/MLB1055`} onClick={() => setUrl("category=MLB1574")}>
        Casa, Móveis e Decoração
      </Link>
      <Link to={`/category/MLB1500`} onClick={() => setUrl("category=MLB1500")}>
        Construção
      </Link>
      <Link to={`/category/MLB5726`} onClick={() => setUrl("category=MLB5726")}>
        Eletrodomésticos
      </Link>
    </div>
  );
};

export default NavCategs;

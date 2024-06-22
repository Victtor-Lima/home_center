import React from "react";
import { Link } from "react-router-dom";

const NavCategs = () => {
  return (
    <div>
      <Link to={`/c/MLB1574`}>Casa, Móveis e Decoração</Link>
      <Link to={`/c/MLB1500`}>Construção</Link>
      <Link to={`/c/MLB5726`}>Eletrodomésticos</Link>
    </div>
  );
};

export default NavCategs;

// {id: 'MLB1574', name: 'Casa, Móveis e Decoração'}
// {id: 'MLB1500', name: 'Construção'}
// {id: 'MLB5726', name: 'Eletrodomésticos'}

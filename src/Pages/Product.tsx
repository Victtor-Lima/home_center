import React from "react";
import DataContext from "../Context/DataContext";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import { IProduct } from "../Utility_functions/types_project/types";

const Product = () => {
  const [favorite, setFavorite] = React.useState<IProduct[]>([]);
  const { id } = useParams();
  const context = React.useContext(DataContext);

  React.useEffect(() => {
    context?.seturlProducts(
      `https://api.mercadolibre.com/sites/MLB/search?q=${id?.replace(
        /-/g,
        " "
      )}`
    );
  }, [context, id]);

  console.log(context?.data);

  console.log(context?.data);
  if (context === null) return;
  if (context.data === null) return;
  return (
    <div>
      <Card
        product={context.data.results[0]}
        arrFavorite={[favorite, setFavorite]}
      />
    </div>
  );
};

export default Product;

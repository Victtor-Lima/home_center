import * as S from "./Styled";
import CardFavorite from "../../components/CardFavorite/Index";
import { useLogin } from "../../context/LoginContext";

const Favorite = () => {
  const { favorite } = useLogin();

  return (
    <S.ContainerFavorite>
      <S.FavoriteTitle>Favoritos</S.FavoriteTitle>
      {favorite?.map((product) => (
        <ul key={product.id}>
          <li>
            <CardFavorite product={product} />
          </li>
        </ul>
      ))}
    </S.ContainerFavorite>
  );
};

export default Favorite;

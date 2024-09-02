import * as S from "./Styled";
import CardFavorite from "../../components/CardFavorite/Index";
import { useLogin } from "../../context/LoginContext";
import NoItems from "../../components/NoItems/Index";

const Favorite = () => {
  const { favorite } = useLogin();

  if (favorite?.length === 0) return <NoItems titlePage="favoritados" />;
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

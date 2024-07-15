import * as S from "./Styled";
import Search from "../Search/Index";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.svg";
import iccart from "../../../public/icon_cart.svg";
import icfavorite from "../../../public/icon_favorite.svg";

const Header = () => {
  return (
    <S.ContainerHeader>
      <S.ContainerCompenentsHeader>
        <Link to="/">
          <S.ImgHeader size={100} src={logo} alt="Logo da Home Center" />
        </Link>
        <Search />
        <Link to="/favorite">
          <S.ImgHeader src={icfavorite} alt="link para favoritados" />
        </Link>
        <Link to="/cart">
          <S.ImgHeader src={iccart} alt="link para carrinho de produtos" />
        </Link>
      </S.ContainerCompenentsHeader>
    </S.ContainerHeader>
  );
};

export default Header;

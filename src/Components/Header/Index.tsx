import * as S from "./Styled";
import Search from "../Search/Index";
import logo from "../../../public/logo.svg";
import Navbar from "../Navbar/Index";

const Header = () => {
  return (
    <S.ContainerHeader>
      <S.ContainerCompenentsHeader>
        <S.LinkPages to="/">
          <S.ImgHeader src={logo} alt="Logo da Home Center" />
        </S.LinkPages>
        <Search />
        <S.LinkPages to="/favorite">Favoritos</S.LinkPages>
        <S.LinkPages to="/cart">Carrinho</S.LinkPages>
        <S.LinkPages to="#">Login</S.LinkPages>
        <Navbar />
      </S.ContainerCompenentsHeader>
    </S.ContainerHeader>
  );
};

export default Header;

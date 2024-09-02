import * as S from "./Styled";
import Search from "../Search/Index";
import logo from "../../../public/logo.svg";
import Navbar from "../Navbar/Index";
import { useLogin } from "../../context/LoginContext";

const Header = () => {
  const { loggedUser, logout } = useLogin();

  return (
    <S.ContainerHeader>
      <S.ContainerCompenentsHeader>
        <S.LinkPages to="/home_center/">
          <S.ImgHeader src={logo} alt="Logo da Home Center" />
        </S.LinkPages>
        <Search />
        <S.LinkPages to="/home_center/favorite">Favoritos</S.LinkPages>
        <S.LinkPages to="/home_center/cart">Carrinho</S.LinkPages>
        {loggedUser ? (
          <S.teste>
            <S.testeP>{loggedUser.userName}</S.testeP>
            <S.Logout onClick={() => logout()}>Sair</S.Logout>
          </S.teste>
        ) : (
          <S.LinkPages to="/home_center/login">Login</S.LinkPages>
        )}
        <Navbar />
      </S.ContainerCompenentsHeader>
    </S.ContainerHeader>
  );
};

export default Header;

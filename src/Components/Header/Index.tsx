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
        <S.LinkPages to="/">
          <S.ImgHeader src={logo} alt="Logo da Home Center" />
        </S.LinkPages>
        <Search />
        <S.LinkPages to="/favorite">Favoritos</S.LinkPages>
        <S.LinkPages to="/cart">Carrinho</S.LinkPages>
        {loggedUser ? (
          <div>
            <p>{loggedUser.userName}</p>
            <button onClick={() => logout()}>Sair</button>
          </div>
        ) : (
          <S.LinkPages to="/login">Login</S.LinkPages>
        )}
        <Navbar />
      </S.ContainerCompenentsHeader>
    </S.ContainerHeader>
  );
};

export default Header;

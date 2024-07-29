import * as S from "./Style";

const Navbar = () => {
  return (
    <S.ContianerNavbar>
      <S.LinkNavbar to={`/c/casa-moveis-decoracao/MLB1574`}>
        Casa, Móveis, Decoração
      </S.LinkNavbar>
      <S.LinkNavbar to={`/c/construcao/MLB1500`}>Construção</S.LinkNavbar>
      <S.LinkNavbar to={`/c/eletrodomesticos/MLB1574`}>
        Eletrodomésticos
      </S.LinkNavbar>
    </S.ContianerNavbar>
  );
};

export default Navbar;

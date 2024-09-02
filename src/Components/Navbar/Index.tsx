import * as S from "./Style";

const Navbar = () => {
  return (
    <S.ContianerNavbar>
      <S.LinkNavbar to={`/home_center/c/casa-moveis-decoracao/MLB1574`}>
        Casa, Móveis, Decoração
      </S.LinkNavbar>
      <S.LinkNavbar to={`/home_center/c/construcao/MLB1500`}>
        Construção
      </S.LinkNavbar>
      <S.LinkNavbar to={`/home_center/c/eletrodomesticos/MLB1574`}>
        Eletrodomésticos
      </S.LinkNavbar>
      <S.LinkNavbar to={`/home_center/c/eletrodomesticos/MLB1051`}>
        Celulares e Telefones
      </S.LinkNavbar>
      <S.LinkNavbar to={`/home_center/c/eletrodomesticos/MLB1430`}>
        Calçados, Roupas e Bolsas
      </S.LinkNavbar>
      <S.LinkNavbar to={`/home_center/c/eletrodomesticos/MLB1196`}>
        Livros, Revistas
      </S.LinkNavbar>
    </S.ContianerNavbar>
  );
};

export default Navbar;

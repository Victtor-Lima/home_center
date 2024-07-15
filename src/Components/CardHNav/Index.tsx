import * as S from "./Styled";

const CardHNav = () => {
  return (
    <>
      <S.ContainerCardHNav to={`/c/casa-moveis-decoracao/MLB1574`}>
        <S.ContainerContent>
          <h3>Casa, Móveis, Decoração</h3>
        </S.ContainerContent>
      </S.ContainerCardHNav>
      <S.ContainerCardHNav to={`/c/construcao/MLB1500`}>
        <S.ContainerContent>
          <h3>Construção</h3>
        </S.ContainerContent>
      </S.ContainerCardHNav>
      <S.ContainerCardHNav to={`/c/eletrodomesticos/MLB1574`}>
        <S.ContainerContent>
          <h3>Eletrodomésticos</h3>
        </S.ContainerContent>
      </S.ContainerCardHNav>
    </>
  );
};

export default CardHNav;

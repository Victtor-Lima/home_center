import * as S from "./Styled";

const NoItems = ({ titlePage }: { titlePage: string }) => {
  return (
    <S.Container>
      <S.Title>Seu {titlePage} está vázio.</S.Title>
      <S.Text>Clique abaixo e compre tudOnline</S.Text>
      <S.Redirect to={"/home_center/"}>Ir às compras</S.Redirect>
    </S.Container>
  );
};

export default NoItems;

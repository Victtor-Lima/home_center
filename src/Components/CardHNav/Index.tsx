import * as S from "./Styled";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";

const CardHNav = () => {
  return (
    <>
      <S.ContainerCardHNav to={`/c/casa-moveis-decoracao/MLB1574`}>
        <S.ImgCardHNav src={img1} alt="" />
        <S.ContainerContent>
          <h3>Casa, Móveis, Decoração</h3>
        </S.ContainerContent>
      </S.ContainerCardHNav>
      <S.ContainerCardHNav to={`/c/construcao/MLB1500`}>
        <S.ImgCardHNav src={img2} alt="" />
        <S.ContainerContent>
          <h3>Construção</h3>
        </S.ContainerContent>
      </S.ContainerCardHNav>
      <S.ContainerCardHNav to={`/c/eletrodomesticos/MLB1574`}>
        <S.ImgCardHNav src={img3} alt="" />
        <S.ContainerContent>
          <h3>Eletrodomésticos</h3>
        </S.ContainerContent>
      </S.ContainerCardHNav>
      <S.ContainerCardHNav to={`/c/casa-moveis-decoracao/MLB1574`}>
        <S.ImgCardHNav src={img1} alt="" />
        <S.ContainerContent>
          <h3>Casa, Móveis, Decoração</h3>
        </S.ContainerContent>
      </S.ContainerCardHNav>
      <S.ContainerCardHNav to={`/c/construcao/MLB1500`}>
        <S.ImgCardHNav src={img2} alt="" />
        <S.ContainerContent>
          <h3>Construção</h3>
        </S.ContainerContent>
      </S.ContainerCardHNav>
      <S.ContainerCardHNav to={`/c/eletrodomesticos/MLB1574`}>
        <S.ImgCardHNav src={img3} alt="" />
        <S.ContainerContent>
          <h3>Eletrodomésticos</h3>
        </S.ContainerContent>
      </S.ContainerCardHNav>
    </>
  );
};

export default CardHNav;

import * as S from "./Style";
import logo from "../../../public/logo.svg";

const Footer = () => {
  return (
    <S.Footer>
      <S.ContainerContent>
        <S.LinkFooter to="/home_center/">
          <S.ImgFooter src={logo} alt="Logo da Home Center" />
        </S.LinkFooter>
      </S.ContainerContent>
    </S.Footer>
  );
};

export default Footer;

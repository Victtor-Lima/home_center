import styled from "styled-components";
import { ImgHeader, LinkPages } from "../Header/Styled";

export const Footer = styled.footer`
  height: 60px;
  border-top: 1px solid #ff9e2d;
`;

export const ContainerContent = styled.div`
  max-width: 1600px;
  height: 100%;
  margin: 0 auto;
`;

export const LinkFooter = styled(LinkPages)`
  display: grid;
  align-items: center;
  height: 100%;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 1.375rem;
  color: #ff9e2d;
  padding: 10px;
`;

export const ImgFooter = styled(ImgHeader)`
  display: block;
  height: max-content;
`;

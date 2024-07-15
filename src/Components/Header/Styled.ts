import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerHeader = styled.header`
  content: "";
  width: 100%;
  left: 0px;
  background: #ff7a44;
`;

export const ContainerCompenentsHeader = styled.div`
  display: grid;
  grid-template-columns: auto 3fr auto auto;
  justify-items: center;
  gap: 20px;
  align-items: center;
  max-width: 1200px;
  height: 65px;
  background: #ff7a44;
  padding: 0 15px;
  margin: 0 auto;
`;

type IntImgHeader = {
  size?: number;
};

export const ImgHeader = styled.img<IntImgHeader>`
  display: grid;
  align-items: center;
  width: ${(props) => (props.size ? `${props.size}px` : "")};
`;

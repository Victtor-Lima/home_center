import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: grid;
  justify-content: center;
  width: 100%;
  height: 100px;
  background: transparent;
  margin-bottom: 15px;
  border-bottom: 1px solid #ff9e2d;
`;

export const ContainerCompenentsHeader = styled.div`
  display: grid;
  grid-template-columns:
    minmax(max-content, 220px)
    minmax(max-content, 1020px)
    repeat(3, max-content);
  align-items: center;
  gap: 0px 20px;
  max-width: 1600px;
`;

export const ImgHeader = styled.img`
  display: grid;
  align-items: center;
`;

export const LinkPages = styled(Link)`
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 1.375rem;
  color: #ff9e2d;

  padding: 10px;

  &:nth-child(5) {
    color: #ff5a5a;
  }
`;

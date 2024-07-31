import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerCardProduct = styled.div`
  max-width: 290px;
  height: 100%;
  background: #fff;
  padding: 15px;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  position: relative;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    transition: 0.3s;
  }

  img {
    justify-self: center;
    width: 100%;
    max-height: 270px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  h1 {
    align-self: self-start;
    font-family: "Nunito", sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.04rem;
    margin-bottom: 20px;
    position: relative;
  }

  h1::before {
    content: "";
    width: 100%;
    height: 0.01rem;
    background: #acabab25;
    top: -10px;
    margin-bottom: 20px;
    position: absolute;
  }
`;

export const LinkProduct = styled(Link)`
  display: grid;
  grid-template-rows: minmax(max-content, 240px) max-content auto max-content;
  align-items: end;
  height: 100%;
`;

export const OriginalPrice = styled.span`
  font-family: "Nunito", sans-serif;
  text-decoration: line-through;
  font-size: 0.85rem;
  margin-bottom: 5px;
`;

export const ContainerPriceFinal = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-content: center;
  align-items: center;
  gap: 5px;
`;

export const PriceFinal = styled.span`
  font-family: "Nunito", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #2e2e2e;
`;

import styled from "styled-components";
import { PriceFinal } from "../CardFavorite/Styled";

export const ContainerCardCart = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  gap: 20px;
  max-width: 1100px;
  background: #ffffff;
  padding: 5px;
  border-radius: 20px;
`;

export const ImgProduct = styled.img`
  align-self: center;
  width: 110px;
  border-radius: 20px;
`;

export const ContainerContent = styled.div`
  display: grid;
  width: 100%;
  grid-template: 1fr max-content / 1fr 1fr 1fr;
  align-items: end;
  font-family: "Nunito", sans-serif;
  padding: 10px;
  position: relative;

  h3 {
    align-self: start;
    grid-column: 1/-1;
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 25px;
  }

  &::before {
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background: rgb(217, 217, 217, 38%);
    position: absolute;
    left: -10px;
  }
`;

export const PriceFinalCart = styled(PriceFinal)`
  font-family: "Nunito", sans-serif;
  font-size: 1.25rem;
`;

export const ContainerUnits = styled.div`
  justify-self: center;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  align-items: center;
  gap: 5px;
  background: #ffce95;
  padding: 2px;
  margin: 0 16px;
  border-radius: 6px;
`;

export const ButtonControllUnits = styled.button`
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: none;
  background: inherit;
  border-radius: 6px;
`;

export const IconControl = styled.img``;

export const Units = styled.span`
  font-size: 1rem;
  background: #ffffff;
  padding: 2px 12px;
  border-radius: 6px;
`;

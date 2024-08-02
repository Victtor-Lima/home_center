import styled from "styled-components";

export const ContainerCardFavorite = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  gap: 20px;
  max-width: 1100px;
  background: #ffffff;
  padding: 5px;
  border-radius: 20px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  img {
    align-self: center;
    width: 160px;
    border-radius: 20px;
  }
`;

export const ContainerContent = styled.div`
  display: grid;
  width: 100%;
  grid-template: 1fr 1fr / 1fr 1fr;
  align-items: end;
  padding: 10px;

  h1 {
    align-self: start;
    grid-column: 1/-1;
    font-family: "Nunito", sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 25px;
  }
`;

export const OriginalPrice = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: line-through;
  font-size: 0.8rem;
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
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2e2e2e;
`;

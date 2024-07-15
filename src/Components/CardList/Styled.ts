import styled from "styled-components";

export const ContainerCardList = styled.section`
  padding: 10px;
  max-width: max-content;
`;

export const ListCards = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
`;
export const OriginalPrice = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: line-through;
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const ContainerPriceFinal = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
`;

export const PriceFinal = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: #2e2e2e;
`;

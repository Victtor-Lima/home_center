import styled from "styled-components";

export const ContainerCardFavorite = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  gap: 20px;
  background: #fff;
  padding: 30px 20px;
  border-bottom: 1px solid #bebebe85;

  img {
    width: 160px;
  }
`;

export const ContainerContent = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr auto;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
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

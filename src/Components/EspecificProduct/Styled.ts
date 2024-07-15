import styled from "styled-components";

export const ContainerSpecificProduct = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

export const ContainerContent = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  position: relative;

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    letter-spacing: 0.04rem;
    margin-top: 30px;
    margin-bottom: 25px;
    position: relative;
  }
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

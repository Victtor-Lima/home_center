import styled from "styled-components";

export const ContainerCardCart = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  gap: 15px;
  font-size: 1.2rem;

  h3 {
    font-size: 0.9rem;
    font-weight: 400;
  }
`;

export const ContainerUnits = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  align-items: center;
  gap: 5px;
`;

export const ButtonControllUnits = styled.button`
  background: #fff;
  padding: 4px;
  border: none;
`;

import styled from "styled-components";

export const ContainerCart = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: max-content max-content;
  align-items: start;
  gap: 15px;
  height: 100%;
`;

export const CartTitle = styled.h1`
  grid-column: 1/-1;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 50px 0px 30px 0px;
`;

export const ContainerHeaderCart = styled.div`
  grid-column: 1;
`;

export const HeaderCartList = styled.ul`
  grid-area: 2;
  display: grid;
  gap: 15px;
  grid-template-columns: 3fr 1fr 1fr 2fr;

  li:nth-of-type(2),
  li:nth-of-type(3) {
    margin-left: 10px;
  }
`;

export const CartListProducts = styled.ul`
  grid-area: 3;
  display: grid;
  gap: 15px;
`;

export const Product = styled.li`
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

export const CartSummary = styled.div`
  grid-area: 3;
  grid-column: 2;
  width: 300px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

import styled from "styled-components";

export const ContainerCart = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: max-content max-content;
  align-items: start;
  gap: 0 34px;
  height: 100%;
  margin-bottom: 30px;
`;

export const CartTitle = styled.h1`
  grid-column: 1/-1;
  font-size: 1.5rem;
  font-weight: 500;
  color: #ff9e2d;
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
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

export const CartSummary = styled.div`
  grid-area: 3;
  grid-column: 2;
  display: grid;
  grid-template-rows: max-content max-content max-content;
  gap: 30px;
  width: 300px;
  height: 350px;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  font-family: "Nunito", sans-serif;

  h3 {
    color: #ff9e2d;
    font-size: 1.5rem;
    padding: 10px 16px;
    box-shadow: rgba(255, 158, 45, 0.13) 0px 2px 0px;
  }

  button {
    justify-self: center;
    font-size: 1.125rem;
    background: #ffa742;
    padding: 10px 18px;
    border: none;
    border-radius: 8px;

    &:hover {
      background: #ff9e2d;
    }
  }
`;

export const SummaryList = styled.ul`
  display: grid;
  gap: 20px;
`;

export const SummaryItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: "Nunito", sans-serif;
  padding: 0px 16px;

  p {
    font-size: 1.2rem;
  }
  span {
    font-size: 1.09rem;
    justify-self: end;
  }

  &:nth-child(3) {
    span {
      color: #22a800;
    }
  }
`;

import styled from "styled-components";

export const ContainerFavorite = styled.section`
  align-self: start;
  display: grid;
  grid-template-rows: max-content;
  width: 1100px;
  gap: 16px;
  padding: 10px;
  margin: 40px auto;

  @media (max-width: 1120px) {
    width: 900px;
  }

  @media (max-width: 950px) {
    width: 700px;
  }
`;

export const FavoriteTitle = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: #ff9e2d;
  margin-bottom: 25px;
`;

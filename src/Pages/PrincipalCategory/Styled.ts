import styled from "styled-components";

export const ContainerPrincipalCategory = styled.section`
  display: grid;
  grid-template-columns: 300px auto;
  margin-top: 50px;

  @media (max-width: 1070px) {
    grid-template-columns: 250px auto;
  }

  @media (max-width: 980px) {
    grid-template-columns: 230px auto;
  }
`;

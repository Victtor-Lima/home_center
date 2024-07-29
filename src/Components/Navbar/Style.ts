import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContianerNavbar = styled.div`
  grid-area: 2/2;
  display: flex;
  gap: 15px;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const LinkNavbar = styled(Link)`
  font-family: "Nunito", sans-serif;
  font-size: 1rem;

  &:hover {
    color: #ff5a5a;
  }
`;

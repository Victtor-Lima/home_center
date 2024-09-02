import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  align-self: center;
  display: grid;
  align-content: center;
  justify-content: center;
  gap: 10px;
  font-family: "Nunito", sans-serif;
  text-align: center;
  width: 60vw;
  height: 60vh;
  background: #ffffff;
  border-radius: 20px;
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const Text = styled.p`
  font-size: 1.2rem;
`;

export const Redirect = styled(Link)`
  justify-self: center;
  background: #ff9369;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 10px 40px;
  border-radius: 20px;

  &:hover {
    background: #ff8555;
  }
`;

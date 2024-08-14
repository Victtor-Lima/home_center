import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
  font-family: "Nunito", sans-serif;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const LoginForm = styled.form`
  display: grid;
  gap: 22px;
  width: max-content;
  max-width: 360px;
  font-family: "Nunito", sans-serif;
`;

export const AccessButton = styled.button`
  height: 48px;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 700;
  background: #ff9e2d;
  margin-top: 20px;
  border: none;
  border-radius: 16px;
`;

export const SignUp = styled(Link)`
  color: #e80000;
  margin-left: 4px;
`;

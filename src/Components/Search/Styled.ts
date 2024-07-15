import styled from "styled-components";
import { Button } from "../ButtonFavorite/Styled";

export const FormSearch = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 350px;
  height: 40px;
  font-size: 1.2rem;
  padding: 15px;
  border: none;
  border-radius: 10px 0px 0px 10px;
  outline: none;
`;

export const ButtonSearch = styled(Button)`
  font-weight: 600;
  padding: 0px 5px;
  border: none;
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
`;

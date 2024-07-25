import styled from "styled-components";
import { Button } from "../ButtonFavorite/Styled";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export const FormSearch = styled.form`
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  background: rgb(198, 198, 198, 50%);
  width: 350px;
  height: 48px;
  font-size: 1.2rem;
  padding: 15px;
  border: none;
  border-radius: 18px 0px 0px 18px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px inset;
  outline: none;
`;

export const ButtonSearch = styled(Button)`
  background: rgb(198, 198, 198, 50%);
  font-weight: 600;
  padding: 0px 14px;
  border: none;
  border-radius: 0px 18px 18px 0px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 1.95px 2.6px inset;
  cursor: pointer;
`;

export const Lupa = styled(HiOutlineMagnifyingGlass)`
  color: #868686;
  font-size: 1.3rem;
`;

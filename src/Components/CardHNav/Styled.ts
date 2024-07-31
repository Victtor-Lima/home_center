import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerCardHNav = styled(NavLink)`
  display: grid;
  grid-template-rows: 224px 48px;
  width: 342px;
  height: 272px;
  background: rgb(255, 158, 45, 50%);
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.3s;
  }

  &:nth-child(even) {
    background: rgb(255, 90, 90, 49%);
  }
`;

export const ContainerContent = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 10px;

  h3 {
    font-family: "Nunito", sans-serif;
    color: #2f2a25;
    font-size: 1.4rem;
    position: relative;
    z-index: 1;
  }
`;

export const ImgCardHNav = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0px 0px;
`;

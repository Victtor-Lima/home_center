import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerCardHNav = styled(NavLink)`
  width: 300px;
  height: 400px;
  background: #e96936;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.3s;
  }
`;

export const ContainerContent = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 10px;

  h3 {
    color: rgb(8, 8, 8);
    font-size: 1.3rem;
    position: relative;
    z-index: 1;
  }

  h3::before {
    content: "";
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    background: #fff;
    border-radius: 8px;
    position: absolute;
    z-index: -1;
    top: -5px;
    left: -5px;
  }
`;

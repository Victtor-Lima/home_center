import styled from "styled-components";

export const ButtonCart = styled.button`
  align-self: self-end;
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(15, 4, 0, 0.726);
  background: transparent;
  padding: 2px 4px 0px 1px;
  border: none;
  border-radius: 10px;
  position: absolute;
  bottom: 12px;
  right: 48px;

  &:active {
    border: 1px solid rgba(255, 87, 20, 0.726);
  }
`;

import styled from "styled-components";

export const ButtonCart = styled.button`
  align-self: self-end;
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(15, 4, 0, 0.726);
  background: rgba(250, 123, 72, 0.726);
  padding: 8px 15px;
  border: none;
  border-radius: 10px;
  position: absolute;
  right: 10px;
  bottom: 10px;

  &:active {
    background: rgba(255, 87, 20, 0.726);
  }
`;

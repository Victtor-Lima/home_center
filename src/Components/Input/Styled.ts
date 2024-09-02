import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 8px;
  font-family: "Nunito", sans-serif;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 1.125rem;
`;

export const Input = styled.input`
  display: grid;
  height: 2.8rem;
  background: linear-gradient(
    -81deg,
    rgba(225, 225, 225, 1) 0%,
    rgba(222, 222, 222, 1) 100%
  );
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  padding-left: 10px;
  border-radius: 14px;
  border: none;
  outline: none;
`;

export const SpanError = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #ff0000;
`;

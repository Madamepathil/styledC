import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  transition: all ease-in-out 0.5s;
  &:hover {
    opacity: 0.8;
    transform: scale(0.9);
  }
`;

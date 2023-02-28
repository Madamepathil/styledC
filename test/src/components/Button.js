import React from "react";
import styled from "styled-components";

const Button = (props) => {
  console.log(props);
  return (
    <ButtonUse bg={props.bg} onClick={props.onClick}>
      Button
    </ButtonUse>
  );
};

export default Button;
const ButtonUse = styled.button`
  padding: 10px 30px;
  background: ${({ bg }) => bg || "#fff"};
  color: white;
`;

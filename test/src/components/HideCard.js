import React from "react";
import styled from "styled-components";

const HideCard = () => {
  return (
    <div>
      <CardContainer>
        <HiddenCard></HiddenCard>

        <VisibleCard></VisibleCard>
      </CardContainer>
    </div>
  );
};

export default HideCard;

const CardContainer = styled.div`
  height: 200px;
  width: 200px;
  border: 1px solid red;
  margin: 0 auto;
  position: relative;
`;
const HiddenCard = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: red;
`;
const VisibleCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: green;

  transition: 1s all ease-in-out;

  :hover {
    transform: translateX(100%);
    background: transparent;
  }
`;

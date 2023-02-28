import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

const Header = () => {
  return (
    <StyledHeader bg="red">
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>build the cominyut your fans will lover</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sunt
              cupiditate iusto modi quod quo earum, iure nam distinctio
              voluptatibus!
            </p>
            <Button bg="purple" color="#fff">
              Get started for free
            </Button>
          </div>

          <Image src="./images/illustration-mockups.svg" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  /*   height: 80px;
  width: 80px; */
  object-fit: contain;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
    width: 200px;
  }
`;

const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  object-fit: contain;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 40px;
  }
`;

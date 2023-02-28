import React, { useState } from "react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbarr = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="">
        Eli<span>Codes</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)} />

      <Menu isOpen={isOpen}>
        <MenuLink href="">Our Work</MenuLink>
        <MenuLink href="">About</MenuLink>
        <MenuLink href="">Careers</MenuLink>
        <MenuLink href="">Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbarr;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #7b7fda;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 30px;
  }
`;

const Nav = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: lightblue;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: all 1s ease;
  @media (max-width: 768px) {
    position: absolute;
    /*   display: block; */
    top: 90px;
    left: 0;
    background: #1dc095;
    height: 100vh;

    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    width: 100%;
  }
`;

const Hamburger = styled(RxHamburgerMenu)`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

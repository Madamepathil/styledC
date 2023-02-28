import React, { useState } from "react";
import styled from "styled-components";
import { TfiCommentsSmiley } from "react-icons/tfi";
import {
  AiFillHome,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
const Sidebar2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SidebarContainer sidebarOpen={sidebarOpen}>
      <SidebarToggle
        sidebarOpen={sidebarOpen}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <AiOutlineArrowLeft />
      </SidebarToggle>
      <HeaderLogoContainer>
        <TfiCommentsSmiley />
      </HeaderLogoContainer>
      <NavContainer>
        {navdata.map((item) => {
          return (
            <>
              <NavItem>
                <NavLogo sidebarOpen={sidebarOpen}>{item.icon}</NavLogo>
                <NavText sidebarOpen={sidebarOpen}>{item.title}</NavText>
              </NavItem>

              {item.subNav?.map((sub) => {
                return (
                  <NavItem>
                    <NavLogo sidebarOpen={sidebarOpen}>{sub.icon}</NavLogo>
                    <NavText sidebarOpen={sidebarOpen}>{sub.title}</NavText>
                  </NavItem>
                );
              })}
            </>
          );
        })}
      </NavContainer>
    </SidebarContainer>
  );
};

export default Sidebar2;
const SidebarContainer = styled.div`
  transition: all 1s ease-in-out;

  width: ${({ sidebarOpen }) => (sidebarOpen ? "250px" : "auto")};
  /*   transform: ${({ sidebarOpen }) =>
    sidebarOpen ? "translateX(0)" : "translateX(-5%)"}; */

  height: 100vh;
  background: black;
  position: relative;
`;
const NavContainer = styled.div`
  margin-top: 30px;
  /* border: 1px solid red; */
  padding: 30px; ;
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: "center";
  /*   border: 1px solid green; */
`;
const NavLogo = styled.div`
  margin-right: ${({ sidebarOpen }) => (sidebarOpen ? "20px" : "0px")};

  svg {
    font-size: 30px;
    color: white;
  }
`;
const NavText = styled.div`
  color: white;

  flex: 1;
  transition: all 0.5s ease-in-out;

  opacity: ${({ sidebarOpen }) => (sidebarOpen ? "1" : "0")};
  display: ${({ sidebarOpen }) => (sidebarOpen ? "inline-block" : "none")};
`;
const HeaderLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  svg {
    color: white;
    font-size: 2rem;
  }
`;

const SidebarToggle = styled.div`
  position: absolute;
  top: 30px;
  padding: 10px;
  background: black;
  border-radius: 50%;
  right: -40px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
    font-size: 30px;
    transition: transform 0.5s ease-in-out;
    transform: ${({ sidebarOpen }) =>
      sidebarOpen ? "rotate(360deg)" : "rotate(-180deg)"};
  }
`;

const navdata = [
  {
    title: "Home",
    icon: <AiFillHome />,
    id: Date.now(),
    subNav: [
      { title: "About", icon: <AiOutlineArrowRight /> },
      { title: "About", icon: <AiOutlineArrowRight /> },
      { title: "About", icon: <AiOutlineArrowRight /> },
    ],
  },
];

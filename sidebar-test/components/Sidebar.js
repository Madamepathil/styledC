import React, { useContext, useState } from "react";
import styled from "styled-components";
import { v } from "../styles/variables";
import {
  AiOutlineSearch,
  AiFillHome,
  AiOutlineHome,
  AiOutlineApartment,
  AiOutlineSetting,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";

import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople, BsToggleOff, BsToggleOn } from "react-icons/bs";
import Link from "next/link";
import { Switch } from "@mui/material";
import { ThemeContext } from "../pages/_app";
const label = { inputProps: { "aria-label": "Switch demo" } };

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { setTheme } = useContext(ThemeContext);

  return (
    <SideBarContainer isOpen={sidebarOpen}>
      <SideBarButtonContainer
        isOpen={sidebarOpen}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
      </SideBarButtonContainer>

      <Search style={!sidebarOpen ? { width: "fit-content" } : {}}>
        <SearchIcon sidebarOpen={sidebarOpen} />
        <input style={!sidebarOpen ? { width: 0, padding: "10px" } : {}} />
      </Search>
      <Divider />

      {linksArray.map(({ icon, label, notification, to }) => (
        <NavContainer key={label}>
          <NavItem href={to}>
            <NavIcon>{icon}</NavIcon>
            {sidebarOpen && (
              <>
                <NavLabel> {label}</NavLabel>
                {notification > 0 && (
                  <NavNotification>{notification}</NavNotification>
                )}
              </>
            )}
          </NavItem>
        </NavContainer>
      ))}
      <Divider />

      {secondaryLinksArray.map(({ icon, label }) => (
        <NavContainer key={label}>
          <NavItem2>
            <NavIcon>{icon}</NavIcon>
            {sidebarOpen && <NavLabel> {label}</NavLabel>}
          </NavItem2>
        </NavContainer>
      ))}

      <Divider />
      <ThemeContainer>
        {sidebarOpen && <ThemeLabel>Change Theme</ThemeLabel>}

        <Switch
          {...label}
          color="primary"
          onChange={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        />
      </ThemeContainer>
    </SideBarContainer>
  );
};

export default Sidebar;

const SideBarContainer = styled.div`
  transition: 1s all ease;

  /*  width: ${({ isOpen }) => (!isOpen ? "auto" : v.sidebarWidth)}; */

  height: 100vh;
  background: ${({ theme }) => theme.bg};
  padding: ${v.lgSpacing};
  position: relative;
`;
const Logo = styled.div`
  width: 50px;
  img {
    max-height: 100%;
    height: auto;
  }
  cursor: pointer;
  margin-bottom: ${v.lgSpacing};
`;

const Search = styled.div`
  background: ${({ theme }) => theme.bgAlpha};
  border: 2px solid ${({ theme }) => theme.bg3};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    border: none;
    outline: none;
    padding: 10px;
    width: 100%;
    background: transparent;
    color: inherit;
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  margin-left: 10px;
  font-size: 20px;
`;
const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.bg3};
  margin-top: 20px;
`;

const NavContainer = styled.div`
  margin-top: 20px;
  background: transparent;
  cursor: pointer;
`;
const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;
const NavItem2 = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;

const NavIcon = styled.div`
  transition: 0.5s all ease-in-out;

  svg {
    font-size: 30px;
  }

  :hover {
    color: green;
    transform: scale(1.05);
  }
`;
const NavLabel = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const NavNotification = styled.div`
  background: lightblue;
  padding: 5px;
  border-radius: 5px;
`;
const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ThemeToggler = styled.div``;
const ToggleIcon = styled(BsToggleOff)`
  font-size: 30px;
`;
const ThemeLabel = styled.div`
  flex: 1;
`;

const SideBarButtonContainer = styled.div`
  position: absolute;
  top: 30px;
  right: -40px;
  border-radius: 50%;
  padding: 10px;
  background: ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 20px;
  }
`;

const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
    notification: 0,
  },
  {
    label: "Statistics",
    icon: <MdOutlineAnalytics />,
    to: "/statistics",
    notification: 3,
  },
  {
    label: "Customers",
    icon: <BsPeople />,
    to: "/customers",
    notification: 0,
  },
  {
    label: "Diagrams",
    icon: <AiOutlineApartment />,
    to: "/diagrams",
    notification: 1,
  },
];

const secondaryLinksArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
  },
  {
    label: "Logout",
    icon: <MdLogout />,
  },
];

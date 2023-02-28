import React, { Children } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      {/*     <Sidebar /> */}
      <Sidebar2 />
      {children}
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  display: flex;
`;

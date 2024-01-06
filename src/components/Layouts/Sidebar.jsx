import React, { useEffect } from "react";
import { useState } from "react";
import {
  getStoredCollapseState,
  setStoredCollapseState,
} from "../../utils/localStorage";
import { useTheme } from "../Theme/ThemeProvider";
import LogoSMLight from "./../../assets/images/logo-sm-dark.png";
import LogoLGLight from "./../../assets/images/logo-lg-dark.png";
import LogoSMDark from "./../../assets/images/logo-sm-light.png";
import LogoLGDark from "./../../assets/images/logo-lg-light.png";
import styled from "styled-components";

const SidebarContainer = styled.nav`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.cardBackground};
  width: ${({ collapsed }) => (collapsed ? "60px" : "200px")};
  align-items: ${({ collapsed }) => (collapsed ? "center" : "flex-start")};
  overflow: hidden;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: ${({ collapsed }) => (collapsed ? "0" : "0")};
  }
`;


const LogoContainer = styled.div`
  text-align: center;
  display: flex;
  margin: 10px 0 0 10px;
`;

const Logo = styled.img`
  width: ${({ collapsed }) => (collapsed ? "40px" : "150px")};
  height: auto;
`;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(getStoredCollapseState());
  const { theme } = useTheme();
  const storedValue = localStorage.getItem("theme");

  const toggleSidebar = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    setStoredCollapseState(newCollapsed);
  };

  useEffect(() => {
    setCollapsed(getStoredCollapseState());
  }, []);

  let logoPath;
  if (storedValue === "dark" && collapsed) {
    logoPath = LogoSMDark;
  } else if (storedValue === "dark" && !collapsed) {
    logoPath = LogoLGDark;
  } else if (collapsed) {
    logoPath = LogoSMLight;
  } else if (!collapsed) {
    logoPath = LogoLGLight;
  } else {
    logoPath = LogoSMLight;
  }

  return (
    <SidebarContainer collapsed={collapsed}>
      <LogoContainer>
        <Logo
          src={logoPath}
          alt="Softmax Tech"
          collapsed={collapsed}
          onClick={toggleSidebar}
        />
      </LogoContainer>
    </SidebarContainer>
  );
};

export default Sidebar;

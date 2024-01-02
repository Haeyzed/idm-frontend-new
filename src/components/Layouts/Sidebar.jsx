import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiLogIn,
  FiLogOut,
  FiSettings,
  FiChevronLeft,
  FiUnlock,
} from "react-icons/fi";
import {
  getStoredCollapseState,
  setStoredCollapseState,
} from "../../utils/localStorage";
import { useTheme } from "../Theme/ThemeProvider";
import LogoSMLight from "./../../assets/images/logo-sm-dark.png";
import LogoLGLight from "./../../assets/images/logo-lg-dark.png";

const StyledSidebar = styled.div`
  width: ${({ collapsed }) => (collapsed ? "80px" : "200px")};
  height: 100vh;
  background-color: ${(props) => props.theme.sidebarBackground};
  color: ${(props) => props.theme.sidebarText};
  padding: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: ${({ collapsed }) => (collapsed ? "center" : "flex-center")};
  transition: width 0.3s ease;
`;

const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  margin-bottom: 5px;
  padding: 8px;
  border-radius: 10px;
  font-size: 14px;
  transition: opacity 0.3s ease, background-color 0.3s ease;

  svg {
    margin-right: ${({ collapsed }) => (collapsed ? "0" : "12px")};
    font-size: 14px;
    transition: margin-right 0.3s ease;
  }

  span {
    opacity: ${({ collapsed }) => (collapsed ? 0 : 1)};
  }

  &.active,
  &:hover {
    background-color: ${(props) => props.theme.hoverBackground};
    color: ${(props) => props.theme.hoverText};
  }

  &.active {
    background-color: ${(props) => props.theme.activeBackground};
    color: ${(props) => props.theme.activeText};
  }
`;

const ToggleButton = styled.button`
  font-family: inherit;
  outline: none;
  border: none;
  background: ${(props) => props.theme.sidebarBackground};
  color: ${(props) => props.theme.sidebarText};
  font-size: inherit;
  padding: 8px;
  position: absolute;
  top: 16px;
  right: ${({ collapsed }) => (collapsed ? "-40px" : "-40px")};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: 0 0 2px ${({ theme }) => theme.bg3},
    0 0 7px ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: right 0.3s ease;
  transform: ${({ collapsed }) => (collapsed ? "rotate(180deg)" : "initial")};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: ${({ collapsed }) => (collapsed ? "40px" : "150px")};
  height: auto;
`;

const sidebarData = [
  { to: "/dashboard", icon: <FiHome />, label: "Dashboard" },
  { to: "/users", icon: <FiUsers />, label: "Users" },
  { to: "/oauth-clients", icon: <FiUnlock />, label: "OAuth Client" },
  { to: "/settings", icon: <FiSettings />, label: "Settings" },
];

const Sidebar = ({ onLogout }) => {
  const [collapsed, setCollapsed] = useState(getStoredCollapseState());
  const { theme } = useTheme();

  const toggleSidebar = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    setStoredCollapseState(newCollapsed);
  };

  useEffect(() => {
    setCollapsed(getStoredCollapseState());
  }, []);

  const logoPath = collapsed ? LogoSMLight : LogoLGLight;

  return (
    <StyledSidebar collapsed={collapsed}>
      <LogoContainer>
        <Logo src={logoPath} alt="Softmax Tech" collapsed={collapsed} />
      </LogoContainer>
      {sidebarData.map(({ to, icon, label }) => (
        <SidebarItem
          key={to}
          to={to}
          activeClassName="active"
          exact
          collapsed={collapsed}
        >
          {icon}
          {!collapsed && <span>{label}</span>}
        </SidebarItem>
      ))}
      <ToggleButton collapsed={collapsed} onClick={toggleSidebar}>
        <FiChevronLeft />
      </ToggleButton>
      <SidebarItem to="/logout" icon={<FiLogOut />} label="Logout" onClick={onLogout} />
    </StyledSidebar>
  );
};

export default Sidebar;
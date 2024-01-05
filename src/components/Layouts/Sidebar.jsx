import React, { useEffect } from 'react'
import { useState } from 'react';
import { useTheme } from 'styled-components';
import {
  getStoredCollapseState,
  setStoredCollapseState,
} from "../../utils/localStorage";
import LogoSMLight from "./../../assets/images/logo-sm-dark.png";
import LogoLGLight from "./../../assets/images/logo-lg-dark.png";
import LogoSMDark from "./../../assets/images/logo-sm-light.png";
import LogoLGDark from "./../../assets/images/logo-lg-light.png";

const Sidebar = ({ onLogout }) => {
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
    <div>Sidebar</div>
  )
}

export default Sidebar
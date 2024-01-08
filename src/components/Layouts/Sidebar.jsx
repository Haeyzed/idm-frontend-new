import React, { useEffect, useState } from "react";
import {
    FiBarChart,
    FiBell,
    FiChevronLeft,
    FiChevronRight,
    FiDownloadCloud,
    FiFigma,
    FiHome,
    FiInfo,
    FiLogOut,
    FiMonitor,
    FiMoon,
    FiSearch,
    FiSettings,
    FiSun,
    FiUser
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import LogoSMDark from "../../assets/images/logo-sm-dark.png";
import LogoSMLight from "../../assets/images/logo-sm-light.png";
import Profile from "../../assets/images/profile.jpeg";
import {
    getStoredCollapseState,
    setStoredCollapseState,
} from "../../utils/localStorage";
import { useTheme } from "../Theme/ThemeProvider";

const SidebarContainer = styled.div`
  position: relative;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ collapsed }) => (collapsed ? "80px" : "250px")};
  background: ${(props) => props.theme.cardBackground};
  transition: all 0.5s ease;
  padding: 15px;
`;

const Container = styled.div`
  padding-inline: 1px;
`;

const HeaderTop = styled.div`
  position: relative;
`;

const ImageText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-block-end: 16px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 12px;
`;

const LogoName = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.theme.mainText};

  &.text {
    display: block;
    white-space: nowrap;
    opacity: ${({ collapsed }) => (collapsed ? "0" : "1")};
    pointer-events: ${({ collapsed }) => (collapsed ? "none" : "")};
    transition-delay: ${({ collapsed }) => (collapsed ? "0s" : "")};
    transition: ${({ collapsed }) => (collapsed ? "" : "opacity 0.3s 0.2s")};
  }
`;

const ThemeToggleIcon = styled.div`
  position: absolute;
  right: -28px;
  top: 28%;
  transform: ${({ collapsed }) =>
    collapsed
      ? "translateY(-28%) rotate(180deg)"
      : "translateY(-28%) rotate(0deg)"};
  line-height: 25px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 16px; /* Adjust the font-size as needed */
  color: #fff;
  background-color: ${(props) => props.theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchWrapper = styled.div`
  position: relative;
`;

const SearchBox = styled.div`
  height: 40px;
  width: ${({ collapsed }) => (collapsed ? "40px" : "216px")};
  border-radius: 10px;
  background: ${(props) => props.theme.mainBackground};
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  margin-block-end: 16px;
`;

const SearchBoxInput = styled.input`
  display: block;
  transition: all 0.5s ease;
  color: ${(props) => props.theme.mainText};
  opacity: ${({ collapsed }) => (collapsed ? "0" : "")};
  background: transparent;
  font-weight: 400;
  outline: none;
  width: 100%;
  font-size: 13px;

  border: none;
  outline: none;
  background: none;
  font: inherit;

  &::placeholder {
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.mainTitle};
  }
`;

const SearchIcon = styled.div`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  color: ${(props) => props.theme.mainTitle};
`;

const Tooltip = styled.span`
  position: absolute;
  right: -1em;
  top: 50%;
  transform: translateX(100%) translateY(-50%);
  padding: 0.4rem 0.6rem;
  font-size: 0.75rem;
  border-radius: 10px;
  box-shadow: 0 3px 10px -3px rgba(70, 46, 118, 0.3);
  transition: all 0.3s;
  text-align: center;
  white-space: nowrap;
  background-color: #3b4248;
  opacity: 0;
  visibility: hidden;
  color: ${(props) => props.theme.mainTitle};
`;

const NavTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.mainTitle};
  margin-block-end: 16px;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const NavItem = styled.li`
  width: ${({ collapsed }) => (collapsed ? "40px" : "")};
  position: relative;
  height: 40px;
  list-style: none;

  &::before {
    position: absolute;
    content: "";
    border-radius: 50%;
    width: 40px;
    height: 50px;
    top: -15%;
    background-color: ${(props) => props.theme.primaryColor};
    left: -100px;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover::before {
    left: -51px;
    opacity: 1;
  }
`;

const NavLinkItem = styled(Link)`
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 400;
  color: #272b2c;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;

  &.active {
    background-color: ${(props) => props.theme.primaryColor};
    color: #fff;
    &::before {
      left: -51px;
      opacity: 1;
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.mainBackground};
    color: ${(props) => props.theme.mainText};
    &.active {
      background-color: ${(props) => props.theme.primaryColor};
      color: #fff;
    }
  }

  &::before {
    position: absolute;
    content: "";
    border-radius: 50%;
    width: 40px;
    height: 50px;
    top: -15%;
    background-color: ${(props) => props.theme.primaryColor};
    left: -100px;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &.nav_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const NavItemIcon = styled.div`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Count = styled.span`
  padding: 5px 7px;
  border-radius: 8px;
  font-size: 12px;
  background-color: red;
  color: #fff;

  &.text {
    display: block;
    white-space: nowrap;
    opacity: ${({ collapsed }) => (collapsed ? "0" : "1")};
    pointer-events: ${({ collapsed }) => (collapsed ? "none" : "")};
    transition-delay: ${({ collapsed }) => (collapsed ? "0s" : "")};
    transition: ${({ collapsed }) => (collapsed ? "" : "opacity 0.3s 0.2s")};
  }
`;

const NavLink = styled.span`
  &.text {
    display: block;
    white-space: nowrap;
    opacity: ${({ collapsed }) => (collapsed ? "0" : "1")};
    pointer-events: ${({ collapsed }) => (collapsed ? "none" : "")};
    transition-delay: ${({ collapsed }) => (collapsed ? "0s" : "")};
    transition: ${({ collapsed }) => (collapsed ? "" : "opacity 0.3s 0.2s")};
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
  margin-block: 25px 25px;
`;

const MenuSidebar = styled.div`
  margin-block-start: 16px;
`;

const GroupSidebarIcon = styled.div`
  border-radius: 50%;
  color: ${(props) => props.theme.mainTitle};

  &.text {
    display: block;
    white-space: nowrap;
    opacity: ${({ collapsed }) => (collapsed ? "0" : "1")};
    pointer-events: ${({ collapsed }) => (collapsed ? "none" : "")};
    transition-delay: ${({ collapsed }) => (collapsed ? "0s" : "")};
    transition: ${({ collapsed }) => (collapsed ? "" : "opacity 0.3s 0.2s")};
  }
`;

const ThemeContainer = styled.div`
  margin-block-start: 32px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.mainBackground};
  border-radius: 10px;
  padding: 3px 3px;
  height: 40px;
  width: 100%;
  gap: 5px;
`;

const ThemeButton = styled.button`
  border: none;
  outline: none;
  background: none;
  font: inherit;
  cursor: pointer;

  &.btn {
    transition: all 0.4s ease;
    background-color: transparent;
    border-radius: 10px;
    padding: 8px 8px;
    height: 32px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    font-weight: 600;
    color: ${(props) => props.theme.mainText};
    width: ${({ collapsed }) => (collapsed ? "41px" : "104px")};
    padding-inline-start: ${({ collapsed }) => (collapsed ? "12px" : "")};
  }

  &.btn.dark-mode {
    opacity: ${({ collapsed }) => (collapsed ? "0" : "")};
  }

  &.btn.active,
  .btn:hover {
    background-color: ${(props) => props.theme.cardBackground};
  }
`;

const ThemeButtonIcon = styled.div`
  cursor: pointer;
`;

const DataUser = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-block-start: 32px;
`;

const DataUserImage = styled.img`
  //   overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
`;

const DataUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
`;

const DataUserName = styled.span`
  color: ${(props) => props.theme.mainText};
  font-size: 16px;
  font-weight: 600;

  &.text {
    display: block;
    white-space: nowrap;
    opacity: ${({ collapsed }) => (collapsed ? "0" : "1")};
    pointer-events: ${({ collapsed }) => (collapsed ? "none" : "")};
    transition-delay: ${({ collapsed }) => (collapsed ? "0s" : "")};
    transition: ${({ collapsed }) => (collapsed ? "" : "opacity 0.3s 0.2s")};
  }
`;

const DataUserEmail = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.mainText};

  &.text {
    display: block;
    white-space: nowrap;
    opacity: ${({ collapsed }) => (collapsed ? "0" : "1")};
    pointer-events: ${({ collapsed }) => (collapsed ? "none" : "")};
    transition-delay: ${({ collapsed }) => (collapsed ? "0s" : "")};
    transition: ${({ collapsed }) => (collapsed ? "" : "opacity 0.3s 0.2s")};
  }
`;

const LogoutIcon = styled.div`
  margin-inline-start: auto;
  padding-inline-end: 15px;
  font-size: 20px;
  color: ${(props) => props.theme.mainText};
  display: flex;
  align-items: center;
  justify-content: center;

  &.text {
    display: block;
    white-space: nowrap;
    opacity: ${({ collapsed }) => (collapsed ? "0" : "1")};
    pointer-events: ${({ collapsed }) => (collapsed ? "none" : "")};
    transition-delay: ${({ collapsed }) => (collapsed ? "0s" : "")};
    transition: ${({ collapsed }) => (collapsed ? "" : "opacity 0.3s 0.2s")};
  }
`;

const sidebarItems = [
  { to: "/home", icon: <FiHome />, label: "Home" },
  { to: "/dashboard", icon: <FiMonitor />, label: "Dashboard" },
  { to: "/users", icon: <FiUser />, label: "Users", count: 14 },
  { to: "/activity", icon: <FiBarChart />, label: "Activity" },
  { to: "/notification", icon: <FiBell />, label: "Notification", count: 10 },
];

const groupSidebarItems = [
  {
    to: "/figma",
    icon: <FiFigma />,
    label: "Notification",
    count: <FiChevronRight />,
  },
  {
    to: "/download",
    icon: <FiDownloadCloud />,
    label: "Download Cloud",
    count: <FiChevronRight />,
  },
  {
    to: "/bell",
    icon: <FiBell />,
    label: "Bell",
    count: <FiChevronRight />,
  },
];

const additionalNavItems = [
  { to: "/setting", icon: <FiSettings />, label: "Setting" },
  { to: "/support", icon: <FiInfo />, label: "Support" },
];

const Sidebar = ({ onLogout }) => {
  const [collapsed, setCollapsed] = useState(getStoredCollapseState());
  const { theme, toggleTheme } = useTheme();
  const storedTheme = localStorage.getItem("theme");
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const toggleSidebar = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    setStoredCollapseState(newCollapsed);
  };

  useEffect(() => {
    setCollapsed(getStoredCollapseState());
  }, []);

  let Logo;
  if (storedTheme === "dark") {
    Logo = LogoSMLight;
  } else {
    Logo = LogoSMDark;
  }

  return (
    <SidebarContainer collapsed={collapsed}>
      <Container>
        <HeaderTop>
          <ImageText>
            <Image src={Logo} alt="Softmax Tech" />
            <LogoName
              collapsed={collapsed}
              className={`text ${collapsed ? "collapsed" : ""}`}
            >
              Softmax Tech
            </LogoName>
          </ImageText>
          <ThemeToggleIcon collapsed={collapsed} onClick={toggleSidebar}>
            <FiChevronLeft />
          </ThemeToggleIcon>
        </HeaderTop>
        <SearchWrapper>
          <SearchBox collapsed={collapsed}>
            <SearchIcon onClick={toggleSidebar}>
              <FiSearch />
            </SearchIcon>
            <SearchBoxInput
              collapsed={collapsed}
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchBox>
          <Tooltip>Search</Tooltip>
        </SearchWrapper>
        <MenuSidebar>
          <NavTitle>Menu</NavTitle>
          <NavList>
            {sidebarItems
              .filter((item) =>
                item.label.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item, index) => (
                <NavItem key={index} collapsed={collapsed}>
                  <NavLinkItem
                    to={item.to}
                    className={`nav_wrapper ${
                      location.pathname === item.to ? "active" : ""
                    }`}
                  >
                    <NavWrapper>
                      <NavItemIcon>{item.icon}</NavItemIcon>
                      <NavLink
                        collapsed={collapsed}
                        className={`text ${collapsed ? "collapsed" : ""}`}
                      >
                        {item.label}
                      </NavLink>
                    </NavWrapper>
                    {item.count && (
                      <Count
                        collapsed={collapsed}
                        className={`text ${collapsed ? "collapsed" : ""}`}
                      >
                        {item.count}
                      </Count>
                    )}
                  </NavLinkItem>
                  <Tooltip>{item.label}</Tooltip>
                </NavItem>
              ))}
          </NavList>
          <Divider />
          <NavList>
            {additionalNavItems
              .filter((item) =>
                item.label.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item, index) => (
                <NavItem key={index} collapsed={collapsed}>
                  <NavLinkItem
                    to={item.to}
                    className={`nav_wrapper ${
                      location.pathname === item.to ? "active" : ""
                    }`}
                  >
                    <NavWrapper>
                      <NavItemIcon>{item.icon}</NavItemIcon>
                      <NavLink
                        to={item.to}
                        collapsed={collapsed}
                        className={`text ${collapsed ? "collapsed" : ""}`}
                      >
                        {item.label}
                      </NavLink>
                    </NavWrapper>
                  </NavLinkItem>
                  <Tooltip>{item.label}</Tooltip>
                </NavItem>
              ))}
          </NavList>
        </MenuSidebar>
        <MenuSidebar>
          <NavTitle>Group</NavTitle>
          <NavList>
            {groupSidebarItems
              .filter((item) =>
                item.label.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item, index) => (
                <NavItem key={index} collapsed={collapsed}>
                  <NavLinkItem
                    to={item.to}
                    className={`nav_wrapper ${
                      location.pathname === item.to ? "active" : ""
                    }`}
                  >
                    <NavWrapper>
                      <NavItemIcon>{item.icon}</NavItemIcon>
                      <NavLink
                        collapsed={collapsed}
                        className={`text ${collapsed ? "collapsed" : ""}`}
                      >
                        {item.label}
                      </NavLink>
                    </NavWrapper>
                    {item.count && (
                      <GroupSidebarIcon
                        collapsed={collapsed}
                        className={`text ${collapsed ? "collapsed" : ""}`}
                      >
                        {item.count}
                      </GroupSidebarIcon>
                    )}
                  </NavLinkItem>
                  <Tooltip>{item.label}</Tooltip>
                </NavItem>
              ))}
          </NavList>
        </MenuSidebar>
        <ThemeContainer>
          <ThemeButton
            collapsed={collapsed}
            className={`btn light-mode ${
              storedTheme !== "dark" ? "active" : ""
            } ${collapsed ? "collapsed" : ""}`}
            onClick={toggleTheme}
          >
            <ThemeButtonIcon>
              <FiSun />
            </ThemeButtonIcon>
            <NavLink
              collapsed={collapsed}
              className={`text ${collapsed ? "collapsed" : ""}`}
            >
              Light
            </NavLink>
          </ThemeButton>
          <ThemeButton
            collapsed={collapsed}
            className={`btn dark-mode ${
              storedTheme === "dark" ? "active" : ""
            } ${collapsed ? "collapsed" : ""}`}
            onClick={toggleTheme}
          >
            <ThemeButtonIcon>
              <FiMoon />
            </ThemeButtonIcon>
            <NavLink
              collapsed={collapsed}
              className={`text ${collapsed ? "collapsed" : ""}`}
            >
              Dark
            </NavLink>
          </ThemeButton>
        </ThemeContainer>
        <DataUser>
          <DataUserImage src={Profile} alt="" />
          <DataUserInfo>
            <DataUserName
              collapsed={collapsed}
              className={`text ${collapsed ? "collapsed" : ""}`}
            >
              Muibi Azeez Abolade
            </DataUserName>
            <DataUserEmail
              collapsed={collapsed}
              className={`text ${collapsed ? "collapsed" : ""}`}
            >
              muibi.azeezabolade@gmail.com
            </DataUserEmail>
          </DataUserInfo>
          <LogoutIcon
            collapsed={collapsed}
            className={`text ${collapsed ? "collapsed" : ""}`}
            onClick={onLogout}
          >
            <FiLogOut />
          </LogoutIcon>
        </DataUser>
      </Container>
    </SidebarContainer>
  );
};

export default Sidebar;

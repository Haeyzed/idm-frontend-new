import React from "react";
import styled from "styled-components";
import ToggleSwitch from "../common/ToggleSwitch";
import { useTheme } from "../Theme/ThemeProvider";
import { FiSun, FiMoon, FiLogOut, FiSearch, FiBell } from "react-icons/fi";

const StyledHeader = styled.header`
  height: 60px;
  background-color: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.headerText};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; /* Hide navigation on smaller screens */
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.headerText};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.linkHover};
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;

const UserName = styled.span`
  font-weight: 500;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px; /* Adjust the margin as needed */
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 16px; /* Adjust the margin as needed */

  @media (max-width: 768px) {
    margin-left: 8px;
    gap: 8px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;

  @media (max-width: 768px) {
    margin-right: 8px;
  }
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid ${(props) => props.theme.inputBorder};
  border-radius: 5px;
  background-color: ${(props) => props.theme.inputBackground};
  color: ${(props) => props.theme.inputText};
  transition: border-color 0.3s ease, background-color 0.3s ease;
  width: 150px;

  &:focus {
    border-color: ${(props) => props.theme.inputFocusBorder};
    background-color: ${(props) => props.theme.inputFocusBackground};
  }

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const Notifications = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none; /* Hide notifications on smaller screens */
  }
`;

const NotificationIcon = styled(FiBell)`
  font-size: 24px;
  color: ${(props) => props.theme.toggleIconDark};
  cursor: pointer;
`;

const Header = ({ user, onLogout }) => {
  const { toggleTheme, theme } = useTheme();
  const storedTheme = localStorage.getItem("theme");
  const isDarkMode = storedTheme === "dark";

  return (
    <StyledHeader>
      <Logo>Logo or Title</Logo>

      <Navigation>
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Navigation>

      <SearchBar>
        <FiSearch size={24} color={theme.toggleIconDark} />
        <SearchInput type="text" placeholder="Search" />
      </SearchBar>

      <UserInfo>
        <Avatar src={user.image} alt={user.name} />
        <UserName>{user.name}</UserName>
      </UserInfo>

      <IconContainer>
        <FiSun size={24} color={theme.toggleIconLight} />
        <ToggleSwitch checked={isDarkMode} onChange={toggleTheme} />
        <Notifications>
          <NotificationIcon />
        </Notifications>
        <FiLogOut size={24} color={theme.toggleIconDark} onClick={onLogout} />
      </IconContainer>
    </StyledHeader>
  );
};

export default Header;

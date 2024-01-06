import React from "react";
import styled from "styled-components";
import {
  FaRegMoon,
  FaSignOutAlt,
  FaBars,
  FaSun,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HorizontalLoadingSpinner from "../common/HorizontalLoadingSpinner";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  // background-color: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.headerText};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LeftContainer = styled(FlexContainer)`
  @media (max-width: 768px) {
    flex-direction: row; /* Keep the items in the same row */
    align-items: center; /* Center the items horizontally */
    margin-bottom: 10px;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
`;

const RightContainer = styled(FlexContainer)`
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.div`
  font-size: 1rem;
`;

const Icon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center; /* Center the icon vertically */
`;

const Header = ({
  title,
  toggleTheme,
  onLogout,
  user,
  isLoading,
  onSidebarToggle,
}) => {
  const storedTheme = localStorage.getItem("theme");
  const navigate = useNavigate();

  const renderThemeIcon = () => {
    if (storedTheme === "dark") {
      return <FaSun size={20} />;
    } else {
      return <FaRegMoon size={20} />;
    }
  };

  const navigateToProfile = () => {
    navigate("/profile");
  };

  return (
    <HeaderContainer>
      <LeftContainer>
        <Icon onClick={onSidebarToggle}>
          <FaBars size={20} />
        </Icon>
        <Title>{title}</Title>
      </LeftContainer>
      <RightContainer>
        <UserInfoContainer onClick={navigateToProfile}>
          <UserImage src={user.image} alt="User" />
          <UserName>{user.name}</UserName>
        </UserInfoContainer>
        <Icon onClick={toggleTheme}>
          {renderThemeIcon()}
        </Icon>
        {!isLoading && (
          <Icon onClick={onLogout}>
            <FaSignOutAlt size={20} />
          </Icon>
        )}
        {isLoading && (
          <HorizontalLoadingSpinner margin="5px 0 5px 0" progress={50} />
        )}
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;

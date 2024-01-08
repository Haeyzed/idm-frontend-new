import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BiChevronLeft,
  BiSearch,
  BiHomeAlt,
  BiCheckSquare,
  BiPulse,
  BiUser,
  BiBell,
  BiCog,
  BiInfoCircle,
} from "react-icons/bi";
import {
  getStoredCollapseState,
  setStoredCollapseState,
} from "../../utils/localStorage";
import LogoSMDark from "../../assets/images/logo-sm-dark.png";
import LogoSMLight from "../../assets/images/logo-sm-light.png";
import Input from "../common/Input";

const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ collapsed }) => (collapsed ? "80px" : "248px")};
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

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 12px;
`;

const LogoName = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.theme.mainText};
  display: block;
  white-space: nowrap;
  opacity: 1;
  transition: opacity 0.3s 0.2s;

  ${({ collapsed }) =>
    collapsed &&
    css`
      opacity: 0;
      pointer-events: none;
      transition-delay: 0s;
    `}
`;

const SidebarToggle = styled(BiChevronLeft)`
  position: absolute;
  right: -28px;
  top: 28%;
  transform: translateY(-28%) rotate(0deg);
  width: 25px;
  height: 25px;
  line-height: 25px;
  border-radius: 50%;
  text-align: center;
  font-size: 15px;
  color: #fff;
  background-color: ${(props) => props.theme.primaryColor};
`;

const MenuSidebar = styled.div`
  position: relative;
`;

const NavTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #6b6b6b;
  margin-block-end: 16px;
`;

const SearchWrapper = styled.div`
  position: relative;
`;

const SearchBox = styled.div`
  transition: all 0.5s ease;
  margin-block-end: 16px;
`;

const SearchInput = styled.input`
  display: block;
  transition: all 0.5s ease;
  color: var(--title-color);
  background: transparent;
  font-weight: 400;
  outline: none;
  width: 100%;
  font-size: 13px;
`;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(getStoredCollapseState());
  const storedValue = localStorage.getItem("theme");

  const toggleSidebar = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    setStoredCollapseState(newCollapsed);
  };

  useEffect(() => {
    setCollapsed(getStoredCollapseState());
  }, []);

  let Logo;
  if (storedValue === "dark") {
    Logo = LogoSMLight;
  } else {
    Logo = LogoSMDark;
  }
  return (
    <SidebarContainer collapsed={collapsed}>
      <Container>
        <HeaderTop>
          <ImageText>
            <LogoImage src={Logo} alt="" />
            <LogoName className="text logo_name">Softmax Tech</LogoName>
          </ImageText>
          <SidebarToggle onClick={toggleSidebar} />
        </HeaderTop>
        <SearchWrapper>
          <SearchBox>
            <Input
              name="search"
              lefticon={<BiSearch />}
              type="text"
              placeholder="Search..."
              value=""
              size="small"
            />
          </SearchBox>
        </SearchWrapper>
        <MenuSidebar>
          <NavTitle>Menu</NavTitle>
        </MenuSidebar>
      </Container>
    </SidebarContainer>
  );
};

export default Sidebar;

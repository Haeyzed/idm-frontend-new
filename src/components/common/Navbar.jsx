// Navbar.jsx
import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  background-color: ${(props) => props.theme.navbarBackground};
  color: ${(props) => props.theme.navbarText};
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const Navbar = ({ children }) => (
  <StyledNavbar>
    {children}
  </StyledNavbar>
);

export default Navbar;

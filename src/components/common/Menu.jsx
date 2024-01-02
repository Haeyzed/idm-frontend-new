// Menu.jsx
import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.menuItemBackground};
  color: ${(props) => props.theme.menuItemText};
  &:hover {
    background-color: ${(props) => props.theme.menuItemHoverBackground};
    color: ${(props) => props.theme.menuItemHoverText};
  }
`;

const Menu = ({ items, onItemClick }) => (
  <StyledMenu>
    {items.map((item, index) => (
      <StyledMenuItem key={index} onClick={() => onItemClick(item)}>
        {item}
      </StyledMenuItem>
    ))}
  </StyledMenu>
);

export default Menu;

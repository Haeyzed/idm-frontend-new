import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const SidebarItemContainer = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.sidebarText};
`;

const SidebarItemIcon = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SidebarItemText = styled.div`
  display: ${({ collapsed }) => (collapsed ? "none" : "block")};
`;

const ArrowIcon = styled.div`
  margin-left: auto;
  transform: ${({ showSubitems }) =>
    showSubitems ? "rotate(0deg)" : "rotate(-90deg)"};
  transition: transform 0.3s ease;
`;

const SubitemsContainer = styled.div`
  padding-left: 20px;
`;

const SidebarItem = ({ icon, text, to, collapsed, onClick, subitems }) => {
  const [showSubitems, setShowSubitems] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (subitems) {
      setShowSubitems(!showSubitems);
    }

    if (to) {
      navigate(to);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      <SidebarItemContainer onClick={handleClick}>
        <SidebarItemIcon>{icon}</SidebarItemIcon>
        <SidebarItemText collapsed={collapsed}>{text}</SidebarItemText>
        {subitems && (
          <ArrowIcon showSubitems={showSubitems}>
            {showSubitems ? <FiChevronUp /> : <FiChevronDown />}
          </ArrowIcon>
        )}
      </SidebarItemContainer>
      {showSubitems && (
        <SubitemsContainer>
          {subitems.map((subitem, index) => (
            <SidebarItem
              key={index}
              icon={subitem.icon}
              text={subitem.text}
              to={subitem.to}
              collapsed={collapsed}
            />
          ))}
        </SubitemsContainer>
      )}
    </div>
  );
};

export default SidebarItem;

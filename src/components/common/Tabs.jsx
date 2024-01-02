// Tabs.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTabs = styled.div`
  display: flex;
`;

const StyledTabButton = styled.button`
  padding: 10px;
  background-color: ${(props) => (props.active ? '#3498db' : '#ddd')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Tabs = ({ tabs, onSelect }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onSelect(index);
  };

  return (
    <StyledTabs>
      {tabs.map((tab, index) => (
        <StyledTabButton
          key={index}
          active={index === activeTab}
          onClick={() => handleTabClick(index)}
        >
          {tab}
        </StyledTabButton>
      ))}
    </StyledTabs>
  );
};

export default Tabs;

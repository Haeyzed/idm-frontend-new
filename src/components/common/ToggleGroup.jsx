// ToggleGroup.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledToggleGroup = styled.div`
  display: flex;
`;

const StyledToggleButton = styled.button`
  padding: 10px;
  background-color: ${(props) => (props.active ? '#3498db' : '#ddd')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  flex: 1;
`;

const ToggleGroup = ({ options }) => {
  const [activeOption, setActiveOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <StyledToggleGroup>
      {options.map((option, index) => (
        <StyledToggleButton
          key={index}
          active={option === activeOption}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </StyledToggleButton>
      ))}
    </StyledToggleGroup>
  );
};

export default ToggleGroup;

// Dropdown.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledDropdownButton = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.dropdownButtonBackground};
  color: ${(props) => props.theme.dropdownButtonText};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledDropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: ${(props) => props.theme.dropdownContentBackground};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
  z-index: 1;
`;

const StyledSearchInput = styled.input`
  padding: 8px;
  margin-bottom: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const StyledOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  input {
    margin-right: 8px;
  }
`;

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOptionClick = (option) => {
    const isSelected = selectedOptions.includes(option);

    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <StyledDropdown>
      <StyledDropdownButton onClick={toggleDropdown}>
        Select an option
      </StyledDropdownButton>
      <StyledDropdownContent isOpen={isOpen}>
        <StyledSearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        {filteredOptions.map((option, index) => (
          <StyledOption key={index} onClick={() => handleOptionClick(option)}>
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              readOnly
            />
            {option}
          </StyledOption>
        ))}
      </StyledDropdownContent>
    </StyledDropdown>
  );
};

export default Dropdown;

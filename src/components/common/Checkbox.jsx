import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledCheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: ${(props) => props.margin || "0 0 0 0"};
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: ${(props) => props.theme.inputText};
`;

const StyledCheckboxLabel = styled.span`
  margin-left: 8px;
  font-family: inherit;
  font-size: 14px;
`;

const StyledCheckboxInput = styled.input`
  display: none;

  &:checked + span {
    background-color: ${(props) => props.theme.checkboxBackgroundChecked};
    border-color: ${(props) => props.theme.checkboxBorderChecked};
  }
`;

const StyledCheckboxIndicator = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  border: 3px solid ${(props) => props.theme.checkboxBorder};
  border-radius: 5px;
  display: inline-block;
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;

  &:hover,
  &:focus {
    border-color: ${(props) => props.theme.inputFocusBorder};
    box-shadow: 0 0 0 3px ${(props) => props.theme.inputFocusShadow};
    outline: none;
  }

  &::before {
    content: "\u2713";
    color: ${(props) => props.theme.checkboxCheckColor};
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  ${StyledCheckboxInput}:checked + &::before {
    opacity: 1;
  }
`;

const ErrorSpan = styled.span`
  color: ${(props) => props.theme.errorColor};
  display: block;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Checkbox = ({ checked, onChange, label, margin, name, error }) => {
  const handleCheckboxChange = (e) => {
    const checkValue = e.target.checked;
    if (onChange) {
      onChange(name, checkValue);
    }
  };

  return (
    <>
      {/* {label && <Label htmlFor={name}>{label} :</Label>} */}
      <StyledCheckboxWrapper margin={margin}>
        <StyledCheckboxInput
          name={name}
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          error={error}
        />
        <StyledCheckboxIndicator />
        <StyledCheckboxLabel>{label}</StyledCheckboxLabel>
      </StyledCheckboxWrapper>
      {error && <ErrorSpan>{error}</ErrorSpan>}
    </>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  margin: PropTypes.string,
  error: PropTypes.string,
};

export default Checkbox;

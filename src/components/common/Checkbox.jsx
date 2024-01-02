import React from 'react';
import styled, { css } from 'styled-components';

const StyledCheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: ${(props) => props.margin || '0 0 0 0'};
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
    content: '\u2713';
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

const Checkbox = ({ checked, onChange, label, margin }) => (
  <StyledCheckboxWrapper margin={margin}>
    <StyledCheckboxInput type="checkbox" checked={checked} onChange={onChange} />
    <StyledCheckboxIndicator />
    <StyledCheckboxLabel>{label}</StyledCheckboxLabel>
  </StyledCheckboxWrapper>
);

export default Checkbox;

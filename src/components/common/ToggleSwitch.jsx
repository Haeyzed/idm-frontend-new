// ToggleSwitch.jsx
import React from 'react';
import styled from 'styled-components';

const StyledToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const StyledToggleSwitchInput = styled.input`
  display: none;

  &:checked + span {
    background-color: ${(props) => props.theme.toggleSwitchBackgroundActive};
  }

  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const StyledToggleSwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.toggleSwitchBackground};
  border-radius: 34px;
  transition: background-color 0.3s;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${(props) => props.theme.toggleSwitchHandle};
    border-radius: 50%;
    transition: transform 0.3s;
  }
`;

const ToggleSwitch = ({ checked, onChange }) => (
  <StyledToggleSwitch>
    <StyledToggleSwitchInput type="checkbox" checked={checked} onChange={onChange} />
    <StyledToggleSwitchSlider />
  </StyledToggleSwitch>
);

export default ToggleSwitch;

// Toggle.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledToggleWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const StyledToggleInput = styled.input`
  display: none;

  &:checked + span {
    background-color: ${(props) => props.theme.toggleBackgroundActive};
  }

  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const StyledToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.toggleBackground};
  border-radius: 34px;
  transition: background-color 0.3s;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${(props) => props.theme.toggleHandle};
    border-radius: 50%;
    transition: transform 0.3s;
  }
`;

const Toggle = ({ checked, onChange }) => (
  <StyledToggleWrapper>
    <StyledToggleInput type="checkbox" checked={checked} onChange={onChange} />
    <StyledToggleSlider />
  </StyledToggleWrapper>
);

export default Toggle;

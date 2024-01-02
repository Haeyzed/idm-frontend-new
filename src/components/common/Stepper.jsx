// Stepper.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledStepper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledStep = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.active ? '#3498db' : '#ddd')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

const Stepper = ({ steps, currentStep }) => {
  const renderSteps = () => {
    return steps.map((step, index) => (
      <StyledStep key={index} active={index === currentStep}>
        {index + 1}
      </StyledStep>
    ));
  };

  return <StyledStepper>{renderSteps()}</StyledStepper>;
};

export default Stepper;

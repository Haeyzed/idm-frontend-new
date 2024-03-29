import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const StyledHorizontalLoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10px;
  margin: ${(props) => props.margin || "0 0 0 0"};
  background-color: ${(props) => props.theme.progressBarBackground};
  border-radius: 5px;
  overflow: hidden;
`;

const StyledHorizontalLoadingSpinnerFill = styled.div`
  height: 100%;
  width: ${(props) => props.$progress}%; // Use $progress instead of progress
  background-color: ${(props) => props.theme.progressBarFill};
  border-radius: 5px;
  animation: ${spinAnimation} 1s linear infinite;
`;

const HorizontalLoadingSpinner = ({ progress, margin }) => (
  <StyledHorizontalLoadingSpinner margin={margin}>
    <StyledHorizontalLoadingSpinnerFill $progress={progress} />
  </StyledHorizontalLoadingSpinner>
);

export default HorizontalLoadingSpinner;

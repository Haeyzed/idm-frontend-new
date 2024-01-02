// ProgressBar.jsx
import React from 'react';
import styled from 'styled-components';

const StyledProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${(props) => props.theme.progressBarBackground};
  border-radius: 5px;
  overflow: hidden;
`;

const StyledProgressBarFill = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: ${(props) => props.theme.progressBarFill};
  transition: width 0.3s ease-in-out;
`;

const ProgressBar = ({ progress }) => (
  <StyledProgressBar>
    <StyledProgressBarFill progress={progress} />
  </StyledProgressBar>
);

export default ProgressBar;

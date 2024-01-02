// Loader.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  border: 4px solid ${(props) => props.theme.loaderBorder};
  border-top: 4px solid ${(props) => props.theme.loaderTop};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => (
  <StyledLoader />
);

export default Loader;

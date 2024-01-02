// Alert.jsx
import React from 'react';
import styled from 'styled-components';

const StyledAlert = styled.div`
  background-color: ${(props) => props.theme.alertBackground};
  color: ${(props) => props.theme.alertText};
  padding: 10px;
  border: 1px solid ${(props) => props.theme.alertBorder};
  border-radius: 5px;
  margin-bottom: 15px;
`;

const Alert = ({ children }) => (
  <StyledAlert>
    {children}
  </StyledAlert>
);

export default Alert;

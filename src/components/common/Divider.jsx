// Divider.jsx
import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.hr`
  border: 1px solid ${(props) => props.theme.dividerColor};
  margin: 10px 0;
`;

const Divider = () => (
  <StyledDivider />
);

export default Divider;

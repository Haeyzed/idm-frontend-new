// Badge.jsx
import React from 'react';
import styled from 'styled-components';

const StyledBadge = styled.span`
  background-color: ${(props) => props.theme.badgeBackground};
  color: ${(props) => props.theme.badgeText};
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
`;

const Badge = ({ label }) => (
  <StyledBadge>
    {label}
  </StyledBadge>
);

export default Badge;

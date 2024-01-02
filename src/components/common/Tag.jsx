// Tag.jsx
import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.span`
  background-color: ${(props) => props.theme.tagBackground};
  color: ${(props) => props.theme.tagText};
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
`;

const Tag = ({ label }) => (
  <StyledTag>
    {label}
  </StyledTag>
);

export default Tag;

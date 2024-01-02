// TagList.jsx
import React from 'react';
import styled from 'styled-components';

const StyledTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledTag = styled.span`
  background-color: ${(props) => props.theme.tagBackground};
  color: ${(props) => props.theme.tagText};
  padding: 5px 10px;
  border-radius: 5px;
  margin: 5px;
`;

const TagList = ({ tags }) => (
  <StyledTagList>
    {tags.map((tag, index) => (
      <StyledTag key={index}>{tag}</StyledTag>
    ))}
  </StyledTagList>
);

export default TagList;

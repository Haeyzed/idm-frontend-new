// Pagination.jsx
import React from 'react';
import styled from 'styled-components';

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const StyledPageButton = styled.button`
  padding: 10px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? '#3498db' : '#ddd')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageButtons = [];

  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <StyledPageButton
        key={i}
        active={i === currentPage}
        onClick={() => onPageChange(i)}
      >
        {i}
      </StyledPageButton>
    );
  }

  return <StyledPagination>{pageButtons}</StyledPagination>;
};

export default Pagination;

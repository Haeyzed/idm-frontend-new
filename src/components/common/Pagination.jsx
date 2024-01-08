import React from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const RoundPageLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 0 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 50%;
  color: ${(props) => (props.active ? "#fff" : props.theme.mainText)};
  background-color: ${(props) =>
    props.active ? "#0077ff" : props.theme.mainBackground};
  text-decoration: none;
  font-size: 14px;

  &:hover {
    background-color: ${(props) =>
      props.active ? "#0056b3" : props.theme.mainBackground};
  }
`;

const Pagination = ({ links, meta, onPageChange }) => {
  const renderPaginationLinks = () => {
    const MAX_PAGES_DISPLAYED = 5; // Adjust the maximum number of pages displayed

    const pages = [];
    const totalPages = meta.last_page;

    // Use the updated current_page directly
    const currentPage = meta.current_page;

    // Determine the range of pages to display
    let startPage = Math.max(
      1,
      currentPage - Math.floor(MAX_PAGES_DISPLAYED / 2)
    );
    let endPage = Math.min(totalPages, startPage + MAX_PAGES_DISPLAYED - 1);

    // Adjust the startPage and endPage if the total pages are less than MAX_PAGES_DISPLAYED
    if (totalPages <= MAX_PAGES_DISPLAYED) {
      startPage = 1;
      endPage = totalPages;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <RoundPageLink
          key={i}
          active={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </RoundPageLink>
      );
    }

    return pages;
  };

  return (
    <PaginationContainer>
      <RoundPageLink onClick={() => onPageChange(1)}>
        <FiChevronsLeft />
      </RoundPageLink>
      {links.prev && (
        <RoundPageLink onClick={() => onPageChange(meta.current_page - 1)}>
          <FiChevronLeft />
        </RoundPageLink>
      )}
      {renderPaginationLinks()}
      {links.next && (
        <RoundPageLink onClick={() => onPageChange(meta.current_page + 1)}>
          <FiChevronRight />
        </RoundPageLink>
      )}
      <RoundPageLink onClick={() => onPageChange(meta.last_page)}>
        <FiChevronsRight />
      </RoundPageLink>
    </PaginationContainer>
  );
};

export default Pagination;

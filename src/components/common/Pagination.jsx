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
    const pages = [];
    for (let i = 1; i <= meta.last_page; i++) {
      pages.push(
        <RoundPageLink
          key={i}
          active={i === meta.current_page}
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

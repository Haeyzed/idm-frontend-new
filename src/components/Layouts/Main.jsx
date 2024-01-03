import React from "react";
import styled from "styled-components";

const StyledMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.mainText};
  min-height: 0; /* Add min-height property */
  overflow-y: auto; /* Add overflow-y property */
`;


const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;

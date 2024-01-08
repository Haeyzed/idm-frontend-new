import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  padding: 0 20px 20px 20px;
  flex: 1;
  overflow: auto;
  height: 100%;
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.mainText};
`;

const Main = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;

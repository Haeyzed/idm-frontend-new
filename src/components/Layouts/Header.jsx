import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: ${(props) => props.theme.mainText};
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default Header;

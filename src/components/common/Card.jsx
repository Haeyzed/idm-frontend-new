import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxwidth || "0"};
  border: 1px solid ${(props) => props.theme.cardBorder};
  background-color: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.cardText};
  padding: 30px;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
`;

const Card = ({ children, width, maxwidth }) => (
  <StyledCard width={width} maxwidth={maxwidth}>
    {children}
  </StyledCard>
);

export default Card;

import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
  animation: ${fadeInDown} 0.3s both;
`;

const Card = ({ children, width, maxwidth }) => (
  <StyledCard width={width} maxwidth={maxwidth}>
    {children}
  </StyledCard>
);

export default Card;

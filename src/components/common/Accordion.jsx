// Accordion.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledAccordion = styled.div`
  border: 1px solid ${(props) => props.theme.accordionBorder};
  border-radius: 4px;
  margin-bottom: 10px;
`;

const StyledAccordionHeader = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.accordionHeaderBackground};
  color: ${(props) => props.theme.accordionHeaderText};
  cursor: pointer;
`;

const StyledAccordionContent = styled.div`
  padding: 10px;
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledAccordion>
      <StyledAccordionHeader onClick={toggleAccordion}>
        {title}
      </StyledAccordionHeader>
      <StyledAccordionContent open={isOpen}>
        {children}
      </StyledAccordionContent>
    </StyledAccordion>
  );
};

export default Accordion;

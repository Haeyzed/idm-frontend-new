// Modal.jsx
import React from 'react';
import styled from 'styled-components';

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalContent = styled.div`
  background-color: ${(props) => props.theme.modalBackground};
  color: ${(props) => props.theme.modalText};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <StyledModalOverlay onClick={onClose}>
      <StyledModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledModalContent>
    </StyledModalOverlay>
  );
};

export default Modal;

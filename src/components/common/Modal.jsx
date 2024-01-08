import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Button from "./Button";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ModalButton = styled.button`
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  background: ${(props) => (props.primary ? "#4caf50" : "#ccc")};
  color: #fff;
  border: none;
  border-radius: 4px;
`;

const Modal = ({ title, content, onClose, onAction, isLoading }) => {
  const [modalData, setModalData] = useState({});

  const handleAction = () => {
    onAction(modalData);
    // onClose();
  };

  return (
    <ModalWrapper>
      <Card width="100%" maxwidth="400px">
        {title && <ModalTitle>{title}</ModalTitle>}
        {content && content(setModalData)}

        <Button
          type="submit"
          className="primary"
          isLoading={isLoading}
          onClick={handleAction}
          margin="5px 0 5px 0"
        >
          Confirm
        </Button>
        <Button
          type="button"
          className="secondary"
          onClick={onClose}
          margin="5px 0 0 0"
        >
          Cancel
        </Button>
      </Card>
    </ModalWrapper>
  );
};

export default Modal;

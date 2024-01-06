import React from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: ${(props) => props.theme.cardBackground};
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const NotificationPopup = ({ onClose }) => {
  return (
    <PopupContainer>
      {/* Your notification content goes here */}
      Notification Popup!
      <button onClick={onClose}>Close</button>
    </PopupContainer>
  );
};

export default NotificationPopup;

// Notification.jsx
import React from 'react';
import styled from 'styled-components';

const StyledNotification = styled.div`
  background-color: ${(props) => props.theme.notificationBackground};
  color: ${(props) => props.theme.notificationText};
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const Notification = ({ children }) => (
  <StyledNotification>
    {children}
  </StyledNotification>
);

export default Notification;

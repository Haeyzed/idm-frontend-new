import React from 'react';
import styled, { css } from 'styled-components';
import { useTimeout } from '../../utils/useTimeout';

const ToastContainer = styled.div`
  border: ${(props) => props.border || '2px solid transparent'};
  border-radius: ${(props) => props.borderRadius || '10px'};
  max-width: 480px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin-top: 16px;
  display: flex;
  position: relative;
  cursor: pointer;
  z-index: 1000; /* Ensure the toast appears on top */
  
  ${(props) => {
    switch (props.status) {
      case 'success':
        return css`
          background-color: #4caf50; /* Green */
          color: #fff;
        `;
      case 'error':
        return css`
          background-color: #f44336; /* Red */
          color: #fff;
        `;
      case 'warning':
        return css`
          background-color: #ff9800; /* Orange */
          color: #fff;
        `;
      case 'info':
        return css`
          background-color: #2196f3; /* Blue */
          color: #fff;
        `;
      default:
        return css`
          background-color: ${props.backgroundColor || '#fafafa'};
          color: ${props.textColor || 'inherit'};
        `;
    }
  }};
`;

const ToastText = styled.div`
  padding: 16px 24px;
  line-height: 1.4;
`;

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  margin-top: 8px;
  margin-right: 8px;
  cursor: pointer;
  color: ${(props) => props.closeColor || 'inherit'};
`;

const Icon = styled.div`
  font-size: 24px;
  margin-right: 16px;
  color: ${(props) => props.iconColor || 'inherit'};
`;

const Toast = (props) => {
  useTimeout(props.close, props.duration || 5000);

  return (
    <ToastContainer
      status={props.status}
      backgroundColor={props.backgroundColor}
      border={props.border}
      borderRadius={props.borderRadius}
    >
      {props.icon && <Icon iconColor={props.iconColor}>{props.icon}</Icon>}
      <ToastText textColor={props.textColor}>{props.children}</ToastText>
      {props.customCloseButton ? (
        <div>{props.customCloseButton}</div>
      ) : (
        <div>
          <CloseButton onClick={props.close}>x</CloseButton>
        </div>
      )}
    </ToastContainer>
  );
};

export default Toast;

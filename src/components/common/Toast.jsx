import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  IconAlertCircleFilled,
  IconCircleCheckFilled,
  IconCircleXFilled,
  IconInfoCircleFilled,
  IconX,
} from '@tabler/icons-react';
import { useToast } from '../../utils/useToast';

const toastTypes = {
  success: {
    icon: <IconCircleCheckFilled />,
    iconColor: 'var(--success)',
    progressBarClass: 'success',
  },
  warning: {
    icon: <IconAlertCircleFilled />,
    iconColor: 'var(--warning)',
    progressBarClass: 'warning',
  },
  info: {
    icon: <IconInfoCircleFilled />,
    iconColor: 'var(--info)',
    progressBarClass: 'info',
  },
  error: {
    icon: <IconCircleXFilled />,
    iconColor: 'var(--error)',
    progressBarClass: 'error',
  },
};

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const slideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0%);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const ToastContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  position: relative;
  width: 320px;
  overflow: hidden;
  animation: ${slideIn} 0.4s ease-in-out forwards;

  &.toast-dismissed {
    animation: ${slideOut} 0.4s ease-in-out forwards;
  }
`;

const ToastMessage = styled.p`
  color: #151626;
  font-size: 14px;
  font-weight: 500;
  margin-left: 12px;
`;

const DismissButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  margin-left: auto;
`;

const ToastIcon = styled.span`
  color: ${(props) => props.iconColor};
`;

const ToastProgressContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ToastProgressBar = styled.div`
  height: 100%;
  animation: ${keyframes`
    0% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  `} 4s linear forwards;

  &.success {
    background-color: var(--success);
  }

  &.info {
    background-color: var(--info);
  }

  &.warning {
    background-color: var(--warning);
  }

  &.error {
    background-color: var(--error);
  }
`;

const Toast = ({ message, type, id }) => {
  const { icon, iconColor, progressBarClass } = toastTypes[type];
  const [dismissed, setDismissed] = useState(false);
  const toast = useToast();
  const progressRef = useRef(null);

  const timerID = useRef(null);

  const handleDismiss = () => {
    setDismissed(true);
    setTimeout(() => {
      toast.remove(id);
    }, 400);
  };

  const handleMouseEnter = () => {
    clearTimeout(timerID.current);
    progressRef.current.style.animationPlayState = 'paused';
  };

  const handleMouseLeave = () => {
    const remainingTime =
      (progressRef.current.offsetWidth /
        progressRef.current.parentElement.offsetWidth) *
      4000;

    progressRef.current.style.animationPlayState = 'running';

    timerID.current = setTimeout(() => {
      handleDismiss();
    }, remainingTime);
  };

  useEffect(() => {
    timerID.current = setTimeout(() => {
      handleDismiss();
    }, 4000);

    return () => {
      clearTimeout(timerID.current);
    };
  }, []);

  return (
    <ToastContainer
      className={`toast ${dismissed ? 'toast-dismissed' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ToastIcon iconColor={iconColor}>{icon}</ToastIcon>
      <ToastMessage>{message}</ToastMessage>
      <DismissButton onClick={handleDismiss}>
        <IconX size={18} color="#aeb0d7" />
      </DismissButton>
      <ToastProgressContainer>
        <ToastProgressBar ref={progressRef} className={`toast-progress-bar ${progressBarClass}`} />
      </ToastProgressContainer>
    </ToastContainer>
  );
};

export default Toast;

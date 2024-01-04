import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  IconAlertCircleFilled,
  IconCircleCheckFilled,
  IconCircleXFilled,
  IconInfoCircleFilled,
  IconX,
} from "@tabler/icons-react";
import { useToast } from "../../utils/useToast";

const toastTypes = {
  success: {
    icon: <IconCircleCheckFilled />,
    iconClass: "success-icon",
    progressBarClass: "success",
    color: "#22c55e",
  },
  warning: {
    icon: <IconAlertCircleFilled />,
    iconClass: "warning-icon",
    progressBarClass: "warning",
    color: "#f97316",
  },
  info: {
    icon: <IconInfoCircleFilled />,
    iconClass: "info-icon",
    progressBarClass: "info",
    color: "#3b82f6",
  },
  error: {
    icon: <IconCircleXFilled />,
    iconClass: "error-icon",
    progressBarClass: "error",
    color: "#ef4444",
  },
};

const progressBarAnimation = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
`;

const slideInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const slideOutAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0%);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const StyledToast = styled.div`
  display: flex;
  align-items: center;
  // background-color: ${(props) => props.theme.cardBackground};
  background-color: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  position: relative;
  width: 320px;
  overflow: hidden;
  animation: ${slideInAnimation} 0.4s ease-in-out forwards;

  &.toast-dismissed {
    animation: ${slideOutAnimation} 0.4s ease-in-out forwards;
  }

  &:hover {
    .toast-progress-bar {
      animation-play-state: paused;
    }
  }
`;

const StyledIcon = styled.span`
  ${({ color }) => css`
    color: ${color};
  `}
`;

const StyledProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const StyledProgressBarBar = styled.div`
  ${({ color }) => css`
    height: 100%;
    animation: ${progressBarAnimation} 4s linear forwards;
    background-color: ${color};
  `}
`;

const StyledMessage = styled.p`
  color: ${(props) => props.theme.mainText};
  font-size: 14px;
  font-weight: 500;
  margin-left: 12px;
`;

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  margin-left: auto;
`;

const Toast = ({ message, type, id, theme }) => {
  const { icon, iconClass, progressBarClass, color } = toastTypes[type];
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
    progressRef.current.style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    const remainingTime =
      (progressRef.current.offsetWidth /
        progressRef.current.parentElement.offsetWidth) *
      4000;

    progressRef.current.style.animationPlayState = "running";

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
    <StyledToast
      className={`toast ${dismissed ? "toast-dismissed" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      theme={theme}
    >
      <StyledIcon className={iconClass} color={color}>
        {icon}
      </StyledIcon>
      <StyledMessage className="toast-message">{message}</StyledMessage>
      <StyledButton className="dismiss-btn" onClick={handleDismiss}>
        <IconX size={18} color="#aeb0d7" />
      </StyledButton>

      <StyledProgressBar className="toast-progress">
        <StyledProgressBarBar
          ref={progressRef}
          className={`toast-progress-bar ${progressBarClass}`}
          color={color}
        />
      </StyledProgressBar>
    </StyledToast>
  );
};

export default Toast;

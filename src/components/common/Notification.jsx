import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const slideLeft = keyframes`
  0% {
    transform: translateX(120%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(120%);
  }
`;

const NotificationWrapper = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
  animation: ${slideLeft} 0.4s;
  animation-fill-mode: forwards;
  width: 300px;

  &.exit {
    animation: ${slideRight} 0.4s;
    animation-fill-mode: forwards;
  }

  &.success {
    background-color: #d4edda; /* Adjust the background color for success type */
  }

  &.error {
    background-color: #f8d7da; /* Adjust the background color for error type */
  }

  &.warning {
    background-color: #fff3cd; /* Adjust the background color for warning type */
  }

  &.info {
    background-color: #d1ecf1; /* Adjust the background color for info type */
  }

  &.custom {
    background-color: #f0f0f0; /* Adjust the background color for custom type */
  }
`;

const NotificationContent = styled.div`
  margin: 0;
  padding: 10px;
`;

const Bar = styled.div`
  height: 5px;
`;

const SuccessBar = styled(Bar)`
  background-color: #28a745;
`;

const ErrorBar = styled(Bar)`
  background-color: #dc3545;
`;

const WarningBar = styled(Bar)`
  background-color: #ffc107; /* Adjust the background color for warning type */
`;

const InfoBar = styled(Bar)`
  background-color: #17a2b8; /* Adjust the background color for info type */
`;

const CustomBar = styled(Bar)`
  background-color: #777; /* Adjust the background color for custom type */
`;

const Notification = (props) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }

        clearInterval(id);
        return prev;
      });
    }, 20);

    setIntervalID(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      props.dispatch({
        type: "REMOVE_NOTIFICATION",
        id: props.id,
      });
    }, 400);
  };

  useEffect(() => {
    if (width === 100) {
      handleCloseNotification();
    }
  }, [width]);

  useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <NotificationWrapper
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`notification-item ${props.type} ${exit ? "exit" : ""}`}
    >
      <NotificationContent>
        <p>{props.message}</p>
        {renderBar(props.type, { width: `${width}%` })}
      </NotificationContent>
    </NotificationWrapper>
  );
};

const renderBar = (type, styles) => {
  switch (type) {
    case "success":
      return <SuccessBar style={styles} />;
    case "error":
      return <ErrorBar style={styles} />;
    case "warning":
      return <WarningBar style={styles} />;
    case "info":
      return <InfoBar style={styles} />;
    case "custom":
      return <CustomBar style={styles} />;
    default:
      return <Bar style={styles} />;
  }
};

export default Notification;

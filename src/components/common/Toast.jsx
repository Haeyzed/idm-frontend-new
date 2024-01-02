// Toast.js
import React, { useCallback, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  font-size: 14px;
  position: fixed;
  z-index: 10;
`;

const Notification = styled.div`
  margin-bottom: 1rem;
  border-radius: 4px;
  box-shadow: 0 0 10px #999;
  color: #000;
  opacity: 0.9;
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
  }
`;

const ToastContainer = styled(Container)`
  bottom: 1rem;
  right: 1rem;
  animation: ${keyframes`
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  `} 0.7s;
`;

const ToastContent = styled.div`
  height: 50px;
  width: 365px;
  color: #fff;
  padding: 20px 15px 10px 10px;
  display: flex;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  opacity: 0.8;
  cursor: pointer;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 6px;
  width: 300px;
  height: 18px;
`;

const Description = styled.p`
  margin: 0;
  text-align: left;
`;

const Toast = ({ toastlist, position, setList }) => {
  const deleteToast = useCallback(
    (id) => {
      const toastListItem = toastlist.filter((e) => e.id !== id);
      setList(toastListItem);
    },
    [toastlist, setList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastlist.length) {
        deleteToast(toastlist[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toastlist, deleteToast]);

  return (
    <ToastContainer>
      {toastlist.map((toast, i) => (
        <Notification key={i} style={{ backgroundColor: toast.backgroundColor }}>
          <ToastContent>
            <div>
              <Title>{toast.title}</Title>
              <Description>{toast.description}</Description>
            </div>
            <CloseButton onClick={() => deleteToast(toast.id)}>X</CloseButton>
          </ToastContent>
        </Notification>
      ))}
    </ToastContainer>
  );
};

export default Toast;

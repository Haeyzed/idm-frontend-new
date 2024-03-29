import styled from 'styled-components';
import Toast from './Toast';

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  row-gap: 12px;
  position: fixed;
  z-index: 9999;

  &.top-right {
    top: 16px;
    right: 16px;
  }

  &.top-left {
    top: 16px;
    left: 16px;
  }

  &.top-center {
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.bottom-left {
    bottom: 16px;
    left: 16px;
  }

  &.bottom-center {
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.bottom-right {
    bottom: 16px;
    right: 16px;
  }
`;

const ToastsContainer = ({ toasts, position = 'top-right' }) => {
  return (
    <Container className={`toasts-container ${position}`}>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </Container>
  );
};

export default ToastsContainer;

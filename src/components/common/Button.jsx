import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  margin: ${(props) => props.margin || "0 0 0 0"};
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  padding: ${(props) =>
    props.size === "small"
      ? "8px 12px"
      : props.size === "large"
      ? "18px 24px"
      : "13px 16px"};
  border: none;
  border-radius: 10px;
  font-family: inherit;
  cursor: ${(props) => (props.isloading ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.buttonHoverBackground};
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  ${(props) =>
    props.isloading &&
    css`
      cursor: not-allowed;
      opacity: 0.8;
    `}

  ${(props) =>
    props.className === "outline" &&
    css`
      background-color: transparent;
      border: 2px solid ${(props) => props.theme.buttonBackground};
      color: ${(props) => props.theme.buttonBackground};

      &:hover {
        background-color: ${(props) => props.theme.buttonBackground};
        color: ${(props) => props.theme.buttonText};
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
      }
    `}

  ${(props) =>
    props.className === "primary" &&
    css`
      background-color: ${(props) => props.theme.primaryButtonBackground};
      color: ${(props) => props.theme.primaryButtonText};

      &:hover {
        background-color: ${(props) =>
          props.theme.primaryButtonHoverBackground};
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
      }
    `}

  ${(props) =>
    props.className === "secondary" &&
    css`
      background-color: ${(props) => props.theme.secondaryButtonBackground};
      color: ${(props) => props.theme.secondaryButtonText};

      &:hover {
        background-color: ${(props) =>
          props.theme.secondaryButtonHoverBackground};
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
      }
    `}

  ${(props) =>
    props.className === "danger" &&
    css`
      background-color: ${(props) => props.theme.dangerButtonBackground};
      color: ${(props) => props.theme.dangerButtonText};

      &:hover {
        background-color: ${(props) => props.theme.dangerButtonHoverBackground};
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
      }
    `}

  ${(props) =>
    props.className === "success" &&
    css`
      background-color: ${(props) => props.theme.successButtonBackground};
      color: ${(props) => props.theme.successButtonText};

      &:hover {
        background-color: ${(props) =>
          props.theme.successButtonHoverBackground};
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
      }
    `}

  ${(props) =>
    props.className === "warning" &&
    css`
      background-color: ${(props) => props.theme.warningButtonBackground};
      color: ${(props) => props.theme.warningButtonText};

      &:hover {
        background-color: ${(props) =>
          props.theme.warningButtonHoverBackground};
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
      }
    `}

  ${(props) =>
    props.isloading &&
    css`
      cursor: not-allowed;
      opacity: 0.8;
    `}
`;

const Button = ({
  children,
  onClick,
  type,
  className,
  size,
  isloading,
  margin,
}) => (
  <StyledButton
    onClick={onClick}
    type={type || "button"}
    className={className}
    size={size}
    disabled={isloading}
    margin={margin}
  >
    {isloading ? "Loading..." : children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "large"]),
  isloading: PropTypes.bool,
  margin: PropTypes.string,
};

export default Button;

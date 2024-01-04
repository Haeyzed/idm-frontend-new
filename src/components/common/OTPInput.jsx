import React, { useRef } from "react";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled, { css } from "styled-components";

const ShakeAnimation = css`
  animation: shake 0.5s;

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    20%,
    60% {
      transform: translateX(-5px);
    }
    40%,
    80% {
      transform: translateX(5px);
    }
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: ${(props) => props.theme.inputText};
`;

const StyledInput = styled.input`
  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 12px;
      padding: 8px 8px 8px ${(props) => (props.lefticon ? "26px" : "8px")};
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      font-size: 18px;
      padding: 18px 18px 18px ${(props) => (props.lefticon ? "38px" : "18px")};
    `}

  ${(props) =>
    !props.size &&
    css`
      font-size: 14px;
      padding: 13px 13px 13px ${(props) => (props.lefticon ? "33px" : "13px")};
    `}

  margin: ${(props) => props.margin || "0 0 0 0"};
  border: 2px solid ${(props) => props.theme.inputBorder};
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  color: ${(props) => props.theme.inputText};
  background-color: ${(props) => props.theme.inputBackground};
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  ${(props) => props.error && ShakeAnimation}

  &:focus {
    border-color: ${(props) => props.theme.inputFocusBorder};
    box-shadow: 0 0 0 3px ${(props) => props.theme.inputFocusShadow};
    transform: translateY(-2px);
    outline: none;

    ${(props) =>
      props.error &&
      css`
        border-color: ${(props) => props.theme.errorColor};
        box-shadow: 0 0 0 3px ${(props) => props.theme.errorShadow};
      `}
  }

  &:hover {
    border-color: ${(props) => props.theme.inputHoverBorder};
    box-shadow: 0 0 0 3px ${(props) => props.theme.inputHoverShadow};
    transform: translateY(-2px);

    ${(props) =>
      props.error &&
      css`
        border-color: ${(props) => props.theme.errorColor};
        box-shadow: 0 0 0 3px ${(props) => props.theme.errorShadow};
      `}
  }

  &::placeholder {
    color: ${(props) => props.theme.inputPlaceholder};
  }

  ${(props) =>
    props.error &&
    css`
      border-color: ${(props) => props.theme.errorColor};
      box-shadow: 0 0 0 3px ${(props) => props.theme.errorShadow};
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${(props) => props.theme.disabledBackground};
      color: ${(props) => props.theme.disabledText};
      cursor: not-allowed;
    `}
`;

const ErrorSpan = styled.span`
  color: ${(props) => props.theme.errorColor};
  display: block;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const OTPContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  justify-content: center;
`;

const OTPInput = ({
  name,
  label,
  value,
  onChange,
  disabled,
  error,
  size,
  margin,
  ...rest
}) => {
  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  const handleInputChange = (e, index) => {
    if (onChange) {
      const newValue = e.target.value.slice(0, 1);
      onChange(newValue, index);

      setTimeout(() => {
        if (newValue !== "" && index < inputRefs.length - 1) {
          inputRefs[index + 1].current.focus();
        }

        if (e.target.selectionStart === 0 && index > 0) {
          inputRefs[index - 1].current.focus();
        }
      }, 0);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    if (/^[0-9]*$/.test(pastedData) && pastedData.length === 6) {
      const newOTPValue = pastedData.split("");
      newOTPValue.forEach((value, index) => {
        const currentIndex = Math.min(index, inputRefs.length - 1);
        handleInputChange({ target: { value } }, currentIndex);
      });
    }
  };

  return (
    <>
      {label && <Label>{label} :</Label>}
      <OTPContainer>
        {[...Array(6)].map((_, index) => (
          <StyledInput
            key={index}
            name={`${name}-${index}`}
            type="text"
            placeholder="●"
            value={value[index] || ""}
            onChange={(e) => handleInputChange(e, index)}
            maxLength="1"
            pattern="[0-9]*"
            ref={inputRefs[index]}
            disabled={disabled}
            size={size}
            error={error}
            margin={margin}
            onPaste={handlePaste}
          />
        ))}
      </OTPContainer>
      {error && <ErrorSpan>{error}</ErrorSpan>}
    </>
  );
};

OTPInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "large"]),
  margin: PropTypes.string,
};

export default OTPInput;

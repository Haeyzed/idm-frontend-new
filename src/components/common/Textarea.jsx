import PropTypes from "prop-types";
import React from "react";
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
  margin-bottom: 5px;
  font-size: 14px;
  color: ${(props) => props.theme.inputText};
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const LeftIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 13px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;
  color: ${(props) => props.theme.inputText};

  &:hover {
    color: ${(props) => props.theme.inputText};
  }

  svg {
    font-size: 14px;
    color: ${(props) => props.theme.inputText};
  }
`;

const StyledTextarea = styled.textarea`
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

const Textarea = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  setInputError,
  margin,
  minLength,
  maxLength,
  size,
  ...rest
}) => {
  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e.target.value);

      if (setInputError) {
        setInputError((prevErrorMessages) => ({
          ...prevErrorMessages,
          [name]: "",
        }));
      }
    }
  };
  return (
    <>
      {label && <Label>{label} :</Label>}
      <InputContainer>
        <StyledTextarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          disabled={disabled}
          margin={margin}
          minLength={minLength}
          maxLength={maxLength}
          size={size}
          error={error}
          {...rest}
        />
      </InputContainer>
      {minLength && maxLength && (
        <ErrorSpan>
          {value.length}/{maxLength} characters
        </ErrorSpan>
      )}
      {error && <ErrorSpan>{error}</ErrorSpan>}
    </>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  margin: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  size: PropTypes.oneOf(["small", "large"]),
  setInputError: PropTypes.func,
};

export default Textarea;

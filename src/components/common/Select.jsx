import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
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

const StyledCustomDropdownContainer = styled.div`
  margin: ${(props) => props.margin || "0 0 0 0"};
  text-align: left;
  position: relative;
  cursor: pointer;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;

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

const StyledDropdownInput = styled.div`
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
      padding: 10px 13px 10px ${(props) => (props.lefticon ? "33px" : "13px")};
    `}

  display: flex;
  align-items: center;

  justify-content: space-between;
  user-select: none;
  gap: 7px;

  .dropdown-selected-value.placeholder {
    color: #82868b;
  }
`;

const StyledDropdownTool = styled.div`
  svg {
    transition: all 0.2s ease-in-out;
  }

  svg.translate {
    transform: rotate(180deg);
  }
`;

const StyledDropdownMenu = styled.div`
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  padding: 5px;
  position: absolute;
  transform: translateY(6px);
  border: 1px solid #dbdbdb;
  border-radius: 6px;
  overflow: auto;
  background-color: ${(props) => props.theme.cardBackground};
  z-index: 99;
  max-height: 312px;
  min-height: 50px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const StyledDropdownItem = styled.div`
  padding: 7px 10px;
  margin: 0 0 3px 0;
  cursor: pointer;
  transition: background-color 0.35s ease;
  border-radius: 6px;
  font-size: 14px;
  color: ${(props) => props.theme.mainText};

  &:hover {
    background-color: ${(props) => props.theme.mainBackground};
    margin: 0 0 3px 0;
    color: ${(props) => props.theme.mainText};
  }

  &.selected {
    background-color: rgba(0, 123, 255, 0.2);
    margin: 0 0 3px 0;
    color: ${(props) => props.theme.primaryColor};
  }

  svg {
    margin-right: 5px;
    font-size: 16px;
  }

  ${(props) =>
    props.icon &&
    css`
      svg {
        margin-right: 5px;
        font-size: 16px;
      }
    `}
`;

const StyledSearchBox = styled.div`
  padding: 5px;

  input {
    width: 100%;
    box-sizing: border-box;
    font-family: inherit;
    padding: 5px;
    color: ${(props) => props.theme.inputText};
    border: 2px solid ${(props) => props.theme.inputBorder};
    background-color: ${(props) => props.theme.inputBackground};
    border-radius: 10px;

    &:focus {
      border-color: ${(props) => props.theme.inputFocusBorder};
      box-shadow: 0 0 0 3px ${(props) => props.theme.inputFocusShadow};
      transform: translateY(-2px);
      outline: none;
    }

    &:hover {
      border-color: ${(props) => props.theme.inputHoverBorder};
      box-shadow: 0 0 0 3px ${(props) => props.theme.inputHoverShadow};
      transform: translateY(-2px);
    }
  }
`;

const StyledDropdownTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const StyledDropdownTagItem = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 2px 4px;
  border-radius: 6px;
  display: flex;
  align-items: center;
`;

const StyledDropdownSingleItem = styled.div`
  color: ${(props) => props.theme.inputText};
  padding: 2px 4px;
  display: flex;
  align-items: center;
`;

const StyledDropdownTagClose = styled.span`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const ErrorSpan = styled.span`
  color: ${(props) => props.theme.errorColor};
  display: block;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
  white-space: pre-wrap;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: ${(props) => props.theme.inputText};
`;

const Icon = ({ isOpen }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      stroke="#222"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={isOpen ? "translate" : ""}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};

const Select = ({
  label,
  name,
  placeHolder,
  options,
  multiple,
  searchable,
  onChange,
  align,
  margin,
  error,
  size,
  lefticon,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(multiple ? [] : null);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    setSearchValue("");
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  const handleInputClick = (e) => {
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (!selectedValue || (multiple && selectedValue.length === 0)) {
      return placeHolder;
    }

    if (multiple) {
      return (
        <StyledDropdownTags>
          {selectedValue.map((option, index) => (
            <StyledDropdownTagItem key={`${option.value}-${index}`}>
              {option.icon && option.icon}
              {option.label}
              <StyledDropdownTagClose onClick={(e) => onTagRemove(e, option)}>
                <CloseIcon />
              </StyledDropdownTagClose>
            </StyledDropdownTagItem>
          ))}
        </StyledDropdownTags>
      );
    }

    return (
      <StyledDropdownSingleItem>
        {selectedValue.icon && selectedValue.icon}
        {selectedValue.label}
      </StyledDropdownSingleItem>
    );
  };

  const removeOption = (option) => {
    return selectedValue.filter((o) => o.value !== option.value);
  };

  const onTagRemove = (e, option) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    if (onChange) {
      onChange(name, newValue);
    }
  };

  const onItemClick = (option, e) => {
    e.stopPropagation();
    let newValue;
    if (multiple) {
      if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = option;
      setShowMenu(false);
    }
    setSelectedValue(newValue);
    if (onChange) {
      onChange(name, newValue);
    }
  };

  const handleSelectAll = () => {
    const allSelected = options.every((option) =>
      selectedValue.some((selected) => selected.value === option.value)
    );

    if (allSelected) {
      setSelectedValue([]);
      onChange(name, []);
    } else {
      const allOptions = options.map((option) => ({
        value: option.value,
        label: option.label,
        icon: option.icon,
      }));
      setSelectedValue(allOptions);
      if (onChange) {
        onChange(name, allOptions);
      }
    }
  };

  const isSelected = (option) => {
    if (multiple) {
      return selectedValue.filter((o) => o.value === option.value).length > 0;
    }

    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );
  };

  return (
    <>
      {label && <Label>{label} :</Label>}
      <StyledCustomDropdownContainer margin={margin} error={error} name={name}>
        {lefticon && <LeftIcon>{lefticon}</LeftIcon>}
        <StyledDropdownInput
          ref={inputRef}
          onClick={handleInputClick}
          size={size}
          lefticon={lefticon}
          error={error}
          name={name}
        >
          <div
            className={`dropdown-selected-value ${
              !selectedValue || selectedValue.length === 0 ? "placeholder" : ""
            }`}
          >
            {getDisplay()}
          </div>
          <StyledDropdownTool>
            <Icon isOpen={showMenu} />
          </StyledDropdownTool>
        </StyledDropdownInput>

        {showMenu && (
          <StyledDropdownMenu className={`alignment--${align || "auto"}`}>
            {searchable && (
              <StyledSearchBox>
                <input
                  className="form-control"
                  onChange={onSearch}
                  value={searchValue}
                  ref={searchRef}
                />
              </StyledSearchBox>
            )}
            {multiple && (
              <StyledDropdownItem
                onClick={handleSelectAll}
                className="dropdown-item"
              >
                {options.every((option) =>
                  selectedValue.some(
                    (selected) => selected.value === option.value
                  )
                )
                  ? "Remove All"
                  : "Select All"}
              </StyledDropdownItem>
            )}
            {getOptions().map((option) => (
              <StyledDropdownItem
                onClick={(e) => onItemClick(option, e)}
                key={option.value}
                className={isSelected(option) && "selected"}
              >
                {option.icon && option.icon}
                {option.label}
              </StyledDropdownItem>
            ))}
          </StyledDropdownMenu>
        )}
      </StyledCustomDropdownContainer>
      {error && <ErrorSpan>{error}</ErrorSpan>}
    </>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ),
  multiple: PropTypes.bool,
  searchable: PropTypes.bool,
  onChange: PropTypes.func,
  align: PropTypes.string,
  margin: PropTypes.string,
  error: PropTypes.string,
  size: PropTypes.string,
  lefticon: PropTypes.element,
};

export default Select;

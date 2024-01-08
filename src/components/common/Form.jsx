import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Form = ({ onSubmit, children }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Form;

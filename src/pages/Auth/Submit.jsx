import React from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";

const SubmitContainer = styled.div`
  margin-top: 20px;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  margin-bottom: 10px;

  strong {
    margin-right: 5px;
  }

  img {
    max-width: 100%;
    max-height: 100px;
    border-radius: 5px;
    margin-top: 5px;
  }
`;

const convertToSentenceCase = (str) => {
  const replacedStr = str.replace(/id/gi, "").trim();
  return replacedStr
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Submit = (props) => {
  const { data, back, handleSubmit, isLoading } = props;
  const renderValue = (value) => {
    if (value instanceof File) {
      return `File - ${value.name}`;
    }

    return value;
  };
  const listItems = Object.entries(data).map(([key, value]) => (
    <StyledListItem key={key}>
      <strong>{convertToSentenceCase(key)} :</strong>
      {typeof value === "string" && value.match(/\.(jpeg|jpg|gif|png)$/) ? (
        <img src={value} alt="Image" />
      ) : (
        renderValue(value)
      )}
    </StyledListItem>
  ));

  return (
    <SubmitContainer>
      <StyledList>{listItems}</StyledList>
      <Button
        type="submit"
        className="primary"
        margin="5px 0 5px 0"
        isloading={isLoading}
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <Button
        onClick={back}
        type="button"
        className="secondary"
        margin="5px 0 5px 0"
      >
        Previous
      </Button>
    </SubmitContainer>
  );
};

export default Submit;

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
`;

const convertToSentenceCase = (str) => {
  const replacedStr = str.replace(/id/gi, "").trim(); // Replace 'id' with space, case-insensitive
  return replacedStr
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Submit = (props) => {
  const { data, back, handleSubmit } = props;

//   const listItems = Object.entries(data).map(([key, value]) => (
//     <StyledListItem key={key}>
//       <strong>{convertToSentenceCase(key)} :</strong> {value}
//     </StyledListItem>
//   ));

  return (
    <SubmitContainer>
      {/* <StyledList>{listItems}</StyledList> */}
      <Button type="submit" className="primary" margin="5px 0 0 0" onClick={handleSubmit }>
        Submit
      </Button>

      <Button
        onClick={back}
        type="button"
        className="secondary"
        margin="5px 0 0 0"
      >
        Previous
      </Button>
    </SubmitContainer>
  );
};

export default Submit;

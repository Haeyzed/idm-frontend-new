import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import notFoundIllustration from "../assets/images/error-404.png";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${(props) => props.theme.mainText};
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #555;
`;

const Illustration = styled.img`
  width: 100%;
  max-width: 200px;
  margin-bottom: 40px;
`;

const GoBackLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.linkText};
  font-weight: bold;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.linkText};
  }
`;

const NotFound = () => {
  return (
    <DefaultLayout title="404 - Not Found">
      <NotFoundContainer>
        <Title>404 - Not Found</Title>
        <Illustration src={notFoundIllustration} alt="Not Found Illustration" />
        <Message>
          Oops! It seems like the page you are looking for does not exist.
        </Message>
        <GoBackLink to="/dashboard">Go back to Home</GoBackLink>
      </NotFoundContainer>
    </DefaultLayout>
  );
};

export default NotFound;

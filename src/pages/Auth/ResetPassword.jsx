import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DarkLogoImage from "../../assets/images/logo-sm-dark.png";
import LightLogoImage from "../../assets/images/logo-sm-light.png";
import axiosClient from "../../axiosClient";
import GuestLayout from "../../components/Layouts/GuestLayout";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";

const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  color: ${(props) => props.theme.mainText};
`;

const StyledSubtitle = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.mainText};
  margin-bottom: 20px;
  text-align: left;
`;

const StyledDescription = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.mainText};
  margin-bottom: 20px;
  text-align: left;
`;

const StyledLogo = styled.img`
  width: 80px;
  height: auto;
  margin: 0 auto 20px;
  display: block;
`;

const ResetPassword = ({ theme }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessages, setInputErrorMessages] = useState({
    email: "",
  });
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const endpoint = "/auth/reset-password";
      const data = {
        email,
      };

      const response = await axiosClient.post(endpoint, data);

      setEmail("");
      setIsLoading(false);
    } catch (error) {
      if (error.response?.status === 422) {
        const { errors } = error.response.data;

        const newErrorMessages = { ...errorMessages };

        Object.keys(errors).forEach((fieldName) => {
          if (Array.isArray(errors[fieldName])) {
            newErrorMessages[fieldName] = errors[fieldName].join("\n");
          } else {
            newErrorMessages[fieldName] = errors[fieldName];
          }
        });

        setInputErrorMessages(newErrorMessages);
      } else if (error.response?.status === 401) {
        // Handle other cases as needed
      } else {
        // Handle other cases as needed
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GuestLayout>
      <Card width="100%" maxwidth="360px">
        <StyledTitle>Reset Password</StyledTitle>
        <StyledSubtitle>
          Embark on the journey to regain control! 🚀
        </StyledSubtitle>
        <StyledDescription>
          Simply enter your registered email address, and we'll dispatch secret
          instructions to reset your password. Swiftly reclaim access to your
          account. Your trust is our priority! Thank you for choosing us!
        </StyledDescription>
        {/* <StyledLogo src={LogoImage} alt="Logo" /> */}
        <StyledLogo
          src={theme === "dark" ? LightLogoImage : DarkLogoImage}
          alt="Logo"
        />
        <Form onSubmit={handleResetPassword}>
          <Input
            name="email"
            lefticon={<FaEnvelope />}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(newValue) => setEmail(newValue)}
            margin="0 0 5px 0"
            error={errorMessages.email}
            setInputError={setInputErrorMessages}
          />
          <Button
            type="submit"
            className="primary"
            isloading={isLoading}
            margin="5px 0 5px 0"
          >
            Reset Password
          </Button>
        </Form>

        <Button
          type="button"
          className="secondary"
          onClick={handleLogin}
          margin="5px 0 0 0"
        >
          Back to Login
        </Button>
      </Card>
    </GuestLayout>
  );
};

export default ResetPassword;

import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../../assets/images/logo-sm-dark.png";
import axiosClient from "../../axiosClient";
import GuestLayout from "../../components/Layouts/GuestLayout";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import { useStateContext } from "../../components/context/ContextProvider.jsx";

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

const ResetPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: "",
    }));
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const endpoint = "/auth/reset-password";
      const response = await axiosClient.post(endpoint, formData);

      setUser(response.data.data);
      setToken(response.data.access_token);
      setFormData({
        email: "",
      });
    } catch (error) {
      if (error.response?.status === 422) {
        const { errors } = error.response.data;

        const stringErrors = {};
        Object.keys(errors).forEach((key) => {
          stringErrors[key] = errors[key].join("\n");
        });

        setErrors(stringErrors);
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
        <StyledLogo src={LogoImage} alt="Logo" />
        <Form onSubmit={handleResetPassword}>
          <Input
            name="email"
            lefticon={<FaEnvelope />}
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(fieldName, newValue) =>
              handleInputChange(fieldName, newValue)
            }
            margin="0 0 5px 0"
            error={errors.email}
          />
          {/* <HorizontalLoadingSpinner /> */}
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
          Login
        </Button>
      </Card>
    </GuestLayout>
  );
};

export default ResetPassword;

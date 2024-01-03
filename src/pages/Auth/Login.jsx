import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoLightImage from "../../assets/images/logo-sm-dark.png";
import LogoDarkImage from "../../assets/images/logo-sm-light.png";
import axiosClient from "../../axiosClient";
import GuestLayout from "../../components/Layouts/GuestLayout";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Checkbox from "../../components/common/Checkbox.jsx";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import { useStateContext } from "../../components/context/ContextProvider.jsx";
import { requestNotificationPermission } from "../../firebase/FCMUtils";

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

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0 5px 0;
`;

const ResetPassword = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.linkText};
  cursor: pointer;
`;

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState({});
  const storedValue = localStorage.getItem("theme");
  const initialFormData = {
    email: "",
    password: "",
    fcm_token: "",
    remember: false,
    ip_address: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const initializeFirebaseMessaging = async () => {
      try {
        const token = await requestNotificationPermission();
        handleInputChange("fcm_token", token);
      } catch (error) {
        console.error("Error initializing Firebase Messaging:", error);
      }
    };

    const fetchIpAddress = async () => {
      try {
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();
        handleInputChange("ip_address", data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };
    fetchIpAddress();
    initializeFirebaseMessaging();
  }, []);

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

  const handleResetPassword = () => {
    navigate("/reset-password", { state: formData.email });
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleCheckboxChange = (fieldName, checked) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: checked,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const endpoint = "/auth/login";
      const response = await axiosClient.post(endpoint, formData);

      setUser(response.data.data);
      setToken(response.data.access_token);
      setFormData(initialFormData);
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
        <StyledTitle>Login</StyledTitle>
        <StyledSubtitle>Step back into the excitement! 🌟</StyledSubtitle>
        <StyledDescription>
          Log in now to unlock the wonders of your account and dive into a world
          of limitless possibilities. We're thrilled to have you back. Let the
          adventure begin! 🚀
        </StyledDescription>
        <StyledLogo
          src={storedValue === "dark" ? LogoDarkImage : LogoLightImage}
          alt="Logo"
        />
        <Form onSubmit={handleLogin}>
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
          <Input
            name="password"
            lefticon={<FaLock />}
            type="password"
            placeholder="Enter your password"
            showPasswordToggle
            value={formData.password}
            onChange={(fieldName, newValue) =>
              handleInputChange(fieldName, newValue)
            }
            margin="5px 0 5px 0"
            error={errors.password}
          />
          <CheckboxContainer>
            <Checkbox
              name="remember"
              checked={formData.remember}
              onChange={(fieldName, newValue) =>
                handleCheckboxChange(fieldName, newValue)
              }
              label="Remember me"
              error={errors.remember}
            />
            <ResetPassword onClick={handleResetPassword}>
              Reset Password
            </ResetPassword>
          </CheckboxContainer>
          {/* <HorizontalLoadingSpinner /> */}
          <Button
            type="submit"
            className="primary"
            isloading={isLoading}
            margin="5px 0 5px 0"
          >
            Login
          </Button>
        </Form>
        <Button
          type="button"
          className="secondary"
          onClick={handleRegister}
          margin="5px 0 0 0"
        >
          Register
        </Button>
      </Card>
    </GuestLayout>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../../assets/images/logo-sm-dark.png";
import axiosClient from "../../axiosClient";
import GuestLayout from "../../components/Layouts/GuestLayout";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Checkbox from "../../components/common/Checkbox.jsx";
import DragDropFile from "../../components/common/DragDropFile.jsx";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import Textarea from "../../components/common/Textarea.jsx";
import { useStateContext } from "../../components/context/ContextProvider.jsx";
import { requestNotificationPermission } from "../../firebase/FCMUtils";
import HorizontalLoadingSpinner from "../../components/common/HorizontalLoadingSpinner.jsx";
import Select from "../../components/common/Select.jsx";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fcmToken, setFcmToken] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, setToken } = useStateContext();
  const [errorMessages, setInputErrorMessages] = useState({
    title: "",
    image: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const initializeFirebaseMessaging = async () => {
      try {
        const token = await requestNotificationPermission();
        setFcmToken(token);
      } catch (error) {
        console.error("Error initializing Firebase Messaging:", error);
      }
    };

    initializeFirebaseMessaging();
  }, []);

  const options = [
    { value: "option1", label: "Option 1", icon: "😊" },
    { value: "option2", label: "Option 2", icon: "😊" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedValue) => {
    setSelectedOption(selectedValue);
    console.log("Selected Option:", selectedValue);
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleFileChange = (file) => {
    console.log("Selected File:", file);
  };

  const handleResetPassword = () => {
    navigate("/reset-password", { state: { email } });
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const endpoint = "/auth/login";
      const data = {
        email,
        password,
        fcm_token: fcmToken,
        remember: rememberMe,
      };

      const response = await axiosClient.post(endpoint, data);

      setUser(response.data.data);
      setToken(response.data.access_token);
      setEmail("");
      setPassword("");
      setRememberMe(false);
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
        <StyledTitle>Login</StyledTitle>
        <StyledSubtitle>Step back into the excitement! 🌟</StyledSubtitle>
        <StyledDescription>
          Log in now to unlock the wonders of your account and dive into a world
          of limitless possibilities. We're thrilled to have you back. Let the
          adventure begin! 🚀
        </StyledDescription>
        <StyledLogo src={LogoImage} alt="Logo" />
        <Form onSubmit={handleLogin}>
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
          <Input
            name="password"
            lefticon={<FaLock />}
            type="password"
            placeholder="Enter password"
            showPasswordToggle
            value={password}
            onChange={(newValue) => setPassword(newValue)}
            margin="5px 0 5px 0"
            error={errorMessages.password}
            setInputError={setInputErrorMessages}
          />
          <Textarea
            name="myTextarea"
            placeholder="Enter your text here"
            value={textareaValue}
            onChange={(newValue) => setTextareaValue(newValue)}
            margin="5px 0 5px 0"
            error={errorMessages.textareaValue}
            setInputError={setInputErrorMessages}
          />
          <Select
            name="title"
            placeHolder="Select an option"
            lefticon={<FaLock />}
            options={options}
            multiple={false}
            searchable={true}
            onChange={handleChange}
            align="left"
            margin="5px 0 5px 0"
            error={errorMessages.title}
            setInputError={setInputErrorMessages}
          />
          <DragDropFile
            name="image"
            onChange={handleFileChange}
            multiple={true}
            accept="*/*"
            margin="5px 0 5px 0"
            error={errorMessages.image}
            setInputError={setInputErrorMessages}
          />
          <CheckboxContainer>
            <Checkbox
              checked={rememberMe}
              onChange={handleRememberMeChange}
              label="Remember me"
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

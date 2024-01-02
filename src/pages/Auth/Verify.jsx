import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../../assets/images/logo-sm-dark.png";
import axiosClient from "../../axiosClient";
import GuestLayout from "../../components/Layouts/GuestLayout";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Form from "../../components/common/Form";
import OTPInput from "../../components/common/OTPInput.jsx";
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
  ${(props) => props.disabled && "pointer-events: none; opacity: 0.5;"}
`;

const CountdownTimer = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.mainText};
  background-color: ${(props) => props.theme.mainBackground};
  padding: 5px;
  border-radius: 5px;
`;

const Verify = () => {
  const { state } = useLocation();
  const userEmail = state?.email || "";
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, setToken } = useStateContext();
  const [isSending, setIsSending] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(30);
  const [isResendButtonDisabled, setIsResendButtonDisabled] = useState(false);
  const [errorMessages, setInputErrorMessages] = useState({
    otp: "",
  });
  const navigate = useNavigate();
  const [otpValue, setOtpValue] = useState(["", "", "", "", "", ""]);

  const handleOtpChange = (newValue, index) => {
    const newOtpValue = [...otpValue];
    newOtpValue[index] = newValue;
    setOtpValue(newOtpValue);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const startResendCountdown = () => {
    setIsSending(true);
    setIsResendButtonDisabled(true);
    setResendCountdown(30);

    const interval = setInterval(() => {
      setResendCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(interval);
          setIsResendButtonDisabled(false);
          setIsSending(false);
          return 0;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);
  };

  const handleVerify = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const endpoint = "/auth/verify-email";
      const data = {
        email: userEmail,
        otp: otpValue.join(""), // Join array elements into a string
      };

      const response = await axiosClient.post(endpoint, data);

      setUser(response.data.data);
      setToken(response.data.access_token);
      setOtpValue(["", "", "", "", "", ""]); // Clear OTP values after verification
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

  const handleResendOTP = async () => {
    try {
      setIsSending(true);

      const endpoint = "/auth/issue-otp";
      const data = {
        email: userEmail,
      };

      await axiosClient.post(endpoint, data);
      startResendCountdown();
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
      setIsSending(false);
    }
  };

  return (
    <GuestLayout>
      <Card width="100%" maxwidth="360px">
        <StyledTitle>Verify Account</StyledTitle>
        <StyledSubtitle>Unleash the magic! 🚀</StyledSubtitle>
        <StyledDescription>
          {`Enter the OTP we sent to your phone or email (`}
          <strong>{userEmail}</strong>
          {`) and unlock a world of incredible services. Your journey with us is just a heartbeat away!`}
        </StyledDescription>
        <StyledLogo src={LogoImage} alt="Logo" />
        <Form onSubmit={handleVerify}>
          <OTPInput
            name="otp"
            value={otpValue}
            onChange={handleOtpChange}
            margin="5px 0 5px 0"
            error={errorMessages.otp}
            setInputError={setInputErrorMessages}
          />
          <CheckboxContainer>
            <ResetPassword
              onClick={handleResendOTP}
              disabled={isSending || isResendButtonDisabled}
            >
              {isSending ? "Initiating resend OTP..." : "Resend OTP"}
            </ResetPassword>
            {isResendButtonDisabled && (
              <CountdownTimer>{resendCountdown}s</CountdownTimer>
            )}
          </CheckboxContainer>
          <Button
            type="submit"
            className="primary"
            isloading={isLoading}
            margin="5px 0 5px 0"
          >
            Verify
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

export default Verify;

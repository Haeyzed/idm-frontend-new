import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axiosClient from "../../axiosClient";
import GuestLayout from "../../components/Layouts/GuestLayout";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import OTPInput from "../../components/common/OTPInput";
import LogoLightImage from "../../assets/images/logo-sm-dark.png";
import LogoDarkImage from "../../assets/images/logo-sm-light.png";
import { useStateContext } from "../../components/context/ContextProvider.jsx";
import { useToast } from "../../utils/useToast.jsx";

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
  const navigate = useNavigate();
  const location = useLocation();
  const [otpValue, setOtpValue] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(30);
  const [isResendButtonDisabled, setIsResendButtonDisabled] = useState(false);
  const storedValue = localStorage.getItem("theme");
  const toast = useToast();
  const initialFormData = {
    email: location?.state?.email || "",
    otp: otpValue.join(""),
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (fieldName, value, index) => {
    if (fieldName === "otp") {
      setOtpValue((prevOtpValue) => {
        const newOtpValue = [...prevOtpValue];
        newOtpValue[index] = value;
        return newOtpValue;
      });
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [fieldName]: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "",
      }));
    }
  };

  // const handleInputChange = (fieldName, value, index) => {
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [fieldName]: value,
  //   }));
  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     [fieldName]: "",
  //   }));
  // };

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
      const response = await axiosClient.post(endpoint, formData);

      setUser(response.data.data);
      setToken(response.data.access_token);
      setFormData(initialFormData);
      toast.success(response.data.message)
    } catch (error) {
      if (error.response?.status === 422) {
        const { errors, message } = error.response.data;
        toast.warning(message)

        const stringErrors = {};
        Object.keys(errors).forEach((key) => {
          stringErrors[key] = errors[key].join("\n");
        });

        setErrors(stringErrors);
      } else if (error.response?.status === 401) {
        const { message } = error.response.data;
        toast.error(message)
      } else {
        const { message } = error.response.data;
        toast.error(message)
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      setIsSending(true);

      const endpoint = "/auth/issue-otp";
      const response = await axiosClient.post(endpoint, formData);
      startResendCountdown();
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
          <strong>{formData.email}</strong>
          {`) and unlock a world of incredible services. Your journey with us is just a heartbeat away!`}
        </StyledDescription>
        <StyledLogo
          src={storedValue === "dark" ? LogoDarkImage : LogoLightImage}
          alt="Logo"
        />
        <Form onSubmit={handleVerify}>
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
          <OTPInput
            name="otp"
            value={otpValue}
            onChange={handleInputChange}
            margin="5px 0 5px 0"
            error={formData.otp}
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
          {/* <HorizontalLoadingSpinner /> */}
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
          Login
        </Button>
      </Card>
    </GuestLayout>
  );
};

export default Verify;

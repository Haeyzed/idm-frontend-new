import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoLightImage from "../../assets/images/logo-sm-dark.png";
import LogoDarkImage from "../../assets/images/logo-sm-light.png";
import axiosClient, {
  setHandleDefaultErrorCallback,
  setHandleGenericErrorCallback,
  setHandleUnauthorizedErrorCallback,
  setHandleValidationErrorCallback,
  setRedirectCallback,
} from "../../axiosClient";
import GuestLayout from "../../components/Layouts/GuestLayout";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import { useStateContext } from "../../components/context/ContextProvider";
import { useToast } from "../../utils/useToast";

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

const StyledUserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: block;
`;

const Unlock = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState({});
  const storedValue = localStorage.getItem("theme");
  const toast = useToast();
  const user = JSON.parse(localStorage.getItem("user"));
  const hasUserImage = user && user.image;
  const initialFormData = {
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    setRedirectCallback(() => {
      navigate("/login");
    });
  }, [navigate]);

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

  setHandleGenericErrorCallback((response) => {
    toast.error(response.data.message || "An error occurred");
  });

  setHandleUnauthorizedErrorCallback((response) => {
    toast.error(response.data.message || "Unauthorized. Please log in.");
  });

  setHandleValidationErrorCallback((response) => {
    toast.warning(response.data.message || "Validation Error");

    const { errors } = response.data;
    const stringErrors = {};
    Object.keys(errors).forEach((key) => {
      stringErrors[key] = errors[key].join("\n");
    });
    setErrors(stringErrors);
  });

  setHandleDefaultErrorCallback((response) => {
    toast.error(response.data.message || "An error occurred");
  });

  const handleUnlock = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const endpoint = "/auth/unlock";
      const response = await axiosClient.post(endpoint, formData);

      setUser(response.data.data);
      setToken(response.data.access_token);
      setFormData(initialFormData);
      toast.success(response.data.message);
      localStorage.setItem("inactive", "false");
      navigate("/");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GuestLayout>
      <Card width="100%" maxwidth="360px">
        <StyledTitle>Unlock</StyledTitle>
        <StyledSubtitle>Rediscover the Thrill! 🌟</StyledSubtitle>
        <StyledDescription>
          Reconnect now to unleash the wonders of your account and plunge into a
          realm of boundless possibilities. We're ecstatic to welcome you back.
          Let the adventure unfold! 🚀
        </StyledDescription>
        {hasUserImage ? (
          <StyledUserImage src={user.image} alt={user.name} />
        ) : (
          <StyledLogo
            src={storedValue === "dark" ? LogoDarkImage : LogoLightImage}
            alt="Logo"
          />
        )}
        <Form onSubmit={handleUnlock}>
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
            margin="0 0 5px 0"
            error={errors.password}
          />
          {/* <HorizontalLoadingSpinner /> */}
          <Button
            type="submit"
            className="primary"
            isLoading={isLoading}
            margin="5px 0 5px 0"
          >
            Unlock
          </Button>
        </Form>
      </Card>
    </GuestLayout>
  );
};

export default Unlock;

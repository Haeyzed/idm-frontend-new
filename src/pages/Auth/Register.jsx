import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoLightImage from "../../assets/images/logo-sm-dark.png";
import LogoDarkImage from "../../assets/images/logo-sm-light.png";
import axiosClient, {
  setHandleGenericErrorCallback,
  setHandleUnauthorizedErrorCallback,
  setHandleValidationErrorCallback,
  setHandleDefaultErrorCallback,
} from "../../axiosClient";
import GuestLayout from "../../components/Layouts/GuestLayout";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import { requestNotificationPermission } from "../../firebase/FCMUtils";
import { useToast } from "../../utils/useToast";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Submit from "./Submit";
import { useStateContext } from "../../components/context/ContextProvider";

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

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [titles, setTitles] = useState([]);
  const [countries, setCountries] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [files, setFiles] = useState([]);
  const { setUser, setToken } = useStateContext();
  const [cityOptions, setCityOptions] = useState([]);
  const [isMultiple, setIsMultiple] = useState(false);
  const toast = useToast();
  const storedValue = localStorage.getItem("theme");
  const initialFormData = {
    title: "",
    name: "",
    username: "",
    email: "",
    phone_number: "",
    country_id: "",
    state_id: "",
    city_id: "",
    gender: "",
    image: "",
    password: "",
    password_confirmation: "",
    fcm_token: "",
  };
  const [formData, setFormData] = useState(initialFormData);

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

  const handleSelectChange = (fieldName, selectedOption) => {
    const value = selectedOption.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: "",
    }));
  };

  const handleFileChange = (fieldName, selectedFiles) => {
    console.log("fieldName:", fieldName);
    console.log("selectedFiles:", selectedFiles);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: "",
    }));

    if (isMultiple) {
      selectedFiles.forEach((file, index) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [`${fieldName}_${index + 1}`]: file,
        }));
      });

      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [fieldName]: selectedFiles[0],
      }));

      setFiles(selectedFiles);
    }
  };

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const back = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleLogin = () => {
    navigate("/login");
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

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const formDataObject = new FormData();

      Object.keys(formData).forEach((key) => {
        formDataObject.append(key, formData[key]);
      });

      const endpoint = "/auth/register";
      const response = await axiosClient.post(endpoint, formDataObject);

      setUser(response.data.data);
      setToken(response.data.access_token);
      toast.success(response.data.message);
      setFormData(initialFormData);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axiosClient.get("/countries");
        setCountries(response.data.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    const fetchTitles = async () => {
      try {
        const response = await axiosClient.get("/titles");
        setTitles(response.data.data);
      } catch (error) {
        console.error("Error fetching titles:", error);
      }
    };

    const initializeFirebaseMessaging = async () => {
      try {
        const token = await requestNotificationPermission();
        handleInputChange("fcm_token", token);
      } catch (error) {
        console.error("Error initializing Firebase Messaging:", error);
      }
    };

    const fetchStates = async () => {
      if (formData.country_id) {
        try {
          const response = await axiosClient.get(
            `/countries/${formData.country_id}/states`
          );
          setStateOptions(response.data.data);
        } catch (error) {
          console.error("Error fetching states:", error);
        }
      }
    };

    const fetchCities = async () => {
      if (formData.state_id) {
        try {
          const response = await axiosClient.get(
            `/states/${formData.state_id}/cities`
          );
          setCityOptions(response.data.data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      }
    };

    fetchCities();
    fetchStates();

    initializeFirebaseMessaging();
    fetchTitles();
    fetchCountries();
  }, [navigate, formData.country_id, formData.state_id]);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const titleOptions = titles.map((title) => ({
    value: title.name,
    label: title.name,
  }));

  const countryOptions = countries.map((country) => ({
    value: country.id,
    label: country.name,
  }));

  return (
    <GuestLayout>
      <Card width="100%" maxwidth="360px">
        <StyledTitle>Register</StyledTitle>
        <StyledSubtitle>
          Embark on an extraordinary journey by joining our vibrant community.
          🌟
        </StyledSubtitle>
        <StyledDescription>
          Register now to unlock a world of possibilities and begin your
          exciting adventure with us. We're thrilled to have you on board! 🚀
        </StyledDescription>
        <StyledLogo
          src={storedValue === "dark" ? LogoDarkImage : LogoLightImage}
          alt="Logo"
        />
        {(() => {
          switch (currentStep) {
            case 1:
              return (
                <Step1
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSelectChange={handleSelectChange}
                  titleOptions={titleOptions}
                  errors={errors}
                  next={next}
                />
              );
            case 2:
              return (
                <Step2
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSelectChange={handleSelectChange}
                  genderOptions={genderOptions}
                  countryOptions={countryOptions}
                  stateOptions={stateOptions}
                  cityOptions={cityOptions}
                  errors={errors}
                  next={next}
                  back={back}
                />
              );
            case 3:
              return (
                <Step3
                  formData={formData}
                  handleInputChange={handleInputChange}
                  multiple={isMultiple}
                  handleFileChange={handleFileChange}
                  errors={errors}
                  next={next}
                  back={back}
                />
              );
            default:
              return (
                <Submit
                  data={formData}
                  back={back}
                  handleSubmit={handleRegister}
                  isLoading={isLoading}
                />
              );
          }
        })()}
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

export default Register;

import React, { useEffect, useState } from "react";
import GuestLayout from "../../components/Layouts/GuestLayout";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Submit from "./Submit";
import Card from "../../components/common/Card";
import styled from "styled-components";
import LogoImage from "../../assets/images/logo-sm-dark.png";
import axiosClient from "../../axiosClient";
import { useNavigate } from "react-router-dom";

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
  const [cityOptions, setCityOptions] = useState([]);
  const [isMultiple, setIsMultiple] = useState(false);
  const [formData, setFormData] = useState({
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

  const handleSelectChange = (fieldName, selectedOption) => {
    const value = selectedOption.value;
    console.log(`Selected ${fieldName} ID:`, value);
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: selectedFiles,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: "",
    }));
    if (isMultiple) {
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    } else {
      setFiles(selectedFiles);
    }
  };
  

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const back = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const formDataObject = new FormData();

      Object.keys(formData).forEach((key) => {
        formDataObject.append(key, formData[key]);
      });

      if (isMultiple) {
        files.forEach((file, index) => {
          formDataObject.append(`image_${index + 1}`, file);
        });
      } else if (files.length > 0) {
        formDataObject.append("image", files[0]);
      }

      const endpoint = "/auth/register";
      const response = await axiosClient.post(endpoint, formDataObject);

      setUser(response.data.data);
      setToken(response.data.access_token);

      setFormData({
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

    fetchTitles();
    fetchCountries();
  }, []);

  useEffect(() => {
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

    fetchStates();
  }, [formData.country_id]);

  useEffect(() => {
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
  }, [formData.state_id]);

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
        <StyledLogo src={LogoImage} alt="Logo" />
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
                />
              );
          }
        })()}
      </Card>
    </GuestLayout>
  );
};

export default Register;

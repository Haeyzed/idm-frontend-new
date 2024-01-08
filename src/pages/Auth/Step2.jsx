import React, { useEffect, useState } from "react";
import { FiMap, FiPhone, FiUsers } from "react-icons/fi";
import axiosClient from "../../axiosClient";
import Button from "../../components/common/Button";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import Select from "../../components/common/Select";

const Step2 = (props) => {
  const {
    formData,
    handleInputChange,
    handleSelectChange,
    errors,
    next,
    back,
    countryOptions,
    genderOptions,
  } = props;

  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      if (formData.country_id) {
        try {
          const response = await axiosClient.get(
            `/countries/${formData.country_id}/states`
          );

          const statesData = response.data.data.map((state) => ({
            value: state.id,
            label: state.name,
          }));

          setStateOptions(statesData);
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

          const citiesData = response.data.data.map((city) => ({
            value: city.id,
            label: city.name,
          }));

          setCityOptions(citiesData);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      }
    };

    fetchCities();
  }, [formData.state_id]);

  return (
    <Form>
      <Input
        name="phone_number"
        lefticon={<FiPhone />}
        type="tel"
        placeholder="Enter your phone number"
        value={formData.phone_number}
        onChange={(fieldName, newValue) =>
          handleInputChange(fieldName, newValue)
        }
        margin="0 0 5px 0"
        error={errors.phone_number}
      />
      <Select
        name="gender"
        placeHolder="Select a gender"
        lefticon={<FiUsers />}
        options={genderOptions}
        multiple={false}
        searchable={true}
        onChange={(fieldName, newValue) =>
          handleSelectChange(fieldName, newValue)
        }
        align="left"
        margin="5px 0 5px 0"
        error={errors.gender}
      />
      <Select
        name="country_id"
        placeHolder="Select a country"
        lefticon={<FiMap />}
        options={countryOptions}
        multiple={false}
        searchable={true}
        onChange={(fieldName, newValue) =>
          handleSelectChange(fieldName, newValue)
        }
        align="left"
        margin="5px 0 5px 0"
        error={errors.country_id}
      />

      <Select
        name="state_id"
        placeHolder="Select a state"
        lefticon={<FiMap />}
        options={stateOptions}
        multiple={false}
        searchable={true}
        onChange={(fieldName, newValue) =>
          handleSelectChange(fieldName, newValue)
        }
        align="left"
        margin="5px 0 5px 0"
        error={errors.state_id}
      />

      <Select
        name="city_id"
        placeHolder="Select a city"
        lefticon={<FiMap />}
        options={cityOptions}
        multiple={false}
        searchable={true}
        onChange={(fieldName, newValue) =>
          handleSelectChange(fieldName, newValue)
        }
        align="left"
        margin="5px 0 5px 0"
        error={errors.city_id}
      />

      <Button
        onClick={next}
        type="button"
        className="primary"
        margin="5px 0 5px 0"
      >
        Next
      </Button>

      <Button
        onClick={back}
        type="button"
        className="secondary"
        margin="5px 0 5px 0"
      >
        Previous
      </Button>
    </Form>
  );
};

export default Step2;

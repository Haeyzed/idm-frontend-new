import React, { useEffect, useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiColumns,
  FiEdit,
  FiEye,
  FiFile,
  FiFileText,
  FiFilter,
  FiMail,
  FiMap,
  FiPhone,
  FiSearch,
  FiTrash2,
  FiUser,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axiosClient, {
  setHandleDefaultErrorCallback,
  setHandleGenericErrorCallback,
  setHandleUnauthorizedErrorCallback,
  setHandleValidationErrorCallback,
  setRedirectCallback,
} from "../../axiosClient";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import DragDropFile from "../../components/common/DragDropFile";
import Form from "../../components/common/Form";
import HorizontalLoadingSpinner from "../../components/common/HorizontalLoadingSpinner";
import Input from "../../components/common/Input";
import Select from "../../components/common/Select";
import { useToast } from "../../utils/useToast";
import Filter from "../../components/common/Filter";
import Pagination from "../../components/common/Pagination";
import Modal from "../../components/common/Modal";
import { FaFileExport } from "react-icons/fa";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.mainText};
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
  overflow: hidden;
`;

const LeftSection = styled.div`
  flex: 0 0 30%;
  box-sizing: border-box;
`;

const FilterSection = styled.div`
  flex: 0 0 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const ButtonSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;

const RightSection = styled.div`
  flex: 0 0 70%;
  box-sizing: border-box;
`;

// Details
const DetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DetailsTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${(props) => props.theme.mainText};
`;

const DetailsField = styled.div`
  margin-bottom: 10px;
`;

const DetailsLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
  color: ${(props) => props.theme.mainText};
`;

const DetailsValue = styled.span`
  color: #888;
`;

const DetailsImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const DataList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DataItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ImageImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const DataInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DataListTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 5px;
`;

const DataListSubtitle = styled.span`
  font-size: 14px;
  color: #888;
`;

const OptionIcons = styled.div`
  display: flex;
  gap: 5px;
`;

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

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const Users = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [titles, setTitles] = useState([]);
  const [countries, setCountries] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [files, setFiles] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [isMultiple, setIsMultiple] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isFetchLoading, setIsFetchLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [isViewVisible, setIsViewVisible] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [dataDetails, setDataDetails] = useState(null);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pagination, setPagination] = useState({
    links: {},
    meta: {},
  });
  const toast = useToast();
  const [filterParams, setFilterParams] = useState({
    page: 1,
    term: "",
    per_page: "10",
    order_by: "name",
    sort_by: "desc",
    period: "",
    start_date: "2024-01-01",
    end_date: "2024-12-31",
    trashed: "0",
  });
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
  };
  const [formData, setFormData] = useState(initialFormData);
  const buttonText = isEditMode ? "Update" : "Save";
  const formTitle = isEditMode ? `Update ${formData.name}` : "Add User";
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isExportLoading, setIsExportLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  useEffect(() => {
    setRedirectCallback(() => {
      navigate("/login");
    });
  }, [navigate]);

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevIsFilterVisible) => {
      const newVisibility = !prevIsFilterVisible;
      localStorage.setItem("filterVisible", newVisibility.toString());
      return newVisibility;
    });
  };

  useEffect(() => {
    const storedFilterState = localStorage.getItem("filterVisible");
    setIsFilterVisible(storedFilterState === "true");
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

  const handleFilterChange = (fieldName, value) => {
    setFilterParams((prevFilterParams) => ({
      ...prevFilterParams,
      [fieldName]: value,
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
    fetchTitles();
    fetchCountries();
  }, [formData.country_id, formData.state_id]);

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

  const handleExport = async (exportData) => {
    try {
      setIsExportLoading(true);

      const response = await axiosClient.post("/user/export", exportData);

      toast.success(response.data.message);
    } catch (error) {
      setIsModalOpen(true);
      setIsExportLoading(false);
    } finally {
      setIsModalOpen(false);
      setIsExportLoading(false);
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  const exportModalContent = (setData) => (
    <>
      <Select
        name="columns"
        placeHolder="Select a columns"
        lefticon={<FiColumns />}
        options={[
          { value: "name", label: "Name" },
          { value: "email", label: "Email" },
          { value: "created_at", label: "Created At" },
        ]}
        multiple={true}
        searchable={true}
        onChange={(fieldName, newValue) => {
          handleSelectChange(fieldName, newValue);
          setData((prevData) => ({
            ...prevData,
            columns: newValue.map((column) => column.value),
          }));
        }}
        align="left"
        margin="5px 0 5px 0"
      />
      <Select
        name="export_type"
        placeHolder="Select a export Type"
        lefticon={<FiFileText />}
        options={[
          { value: "pdf", label: "PDF" },
          { value: "xlsx", label: "XLSX" },
          { value: "csv", label: "CSV" },
        ]}
        multiple={false}
        searchable={true}
        onChange={(fieldName, newValue) => {
          handleSelectChange(fieldName, newValue);
          setData((prevData) => ({ ...prevData, export_type: newValue.value }));
        }}
        align="left"
        margin="5px 0 5px 0"
      />
      <Input
        type="date"
        lefticon={<FiCalendar />}
        name="start_date"
        placeholder="Enter start date"
        onChange={(fieldName, newValue) =>
          setData((prevData) => ({ ...prevData, start_date: newValue }))
        }
        margin="5px 0 5px 0"
      />
      <Input
        type="date"
        lefticon={<FiCalendar />}
        name="end_date"
        placeholder="Enter end date"
        onChange={(fieldName, newValue) =>
          setData((prevData) => ({ ...prevData, end_date: newValue }))
        }
        margin="5px 0 5px 0"
      />
      <Input
        type="email"
        lefticon={<FiMail />}
        name="email"
        placeholder="Enter your email"
        onChange={(fieldName, newValue) =>
          setData((prevData) => ({ ...prevData, email: newValue }))
        }
        margin="5px 0 5px 0"
      />
    </>
  );

  const handleViewUser = async (userId) => {
    try {
      setIsEditMode(false);
      setIsEditVisible(false);
      setIsFetchLoading(true);
      setIsViewVisible(true);

      const response = await axiosClient.get(`/users/${userId}`);
      const userToView = response.data.data;

      if (userToView) {
        setDataDetails(userToView);
        setIsEditMode(false);
        setIsEditVisible(false);
      }
    } finally {
      setIsFetchLoading(false);
    }
  };

  const handleEditUser = (userId) => {
    const userToEdit = datas.find((user) => user.id === userId);

    if (userToEdit) {
      setFormData({
        title: userToEdit.title,
        name: userToEdit.name,
        username: userToEdit.username,
        email: userToEdit.email,
        phone_number: userToEdit.phone_number,
        country_id: userToEdit.country_id,
        state_id: userToEdit.state_id,
        city_id: userToEdit.city_id,
        gender: userToEdit.gender,
        image: "",
      });

      setIsEditMode(true);
      setIsEditVisible(true);
      setIsViewVisible(false);
      setEditId(userId);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      setIsDeleteLoading(true);

      const response = await axiosClient.delete(`/users/${userId}`, {
        params: {
          trashed: "0",
        },
      });

      toast.success(response.data.message);

      setDatas((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } finally {
      setIsDeleteLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setFormData(initialFormData);
    setIsEditMode(false);
    setIsViewVisible(false);
    setIsEditVisible(true);
    setEditId(null);
  };

  const handleSave = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const formDataObject = new FormData();

      Object.keys(formData).forEach((key) => {
        formDataObject.append(key, formData[key]);
      });

      let endpoint = "/users";
      let method = "POST";

      if (isEditMode) {
        endpoint = `/users/${editId}`;
        method = "PUT";
      }

      const response = await axiosClient({
        method,
        url: endpoint,
        data: formDataObject,
      });

      toast.success(response.data.message);
      setFormData(initialFormData);

      setIsEditMode(false);
      setEditId(null);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      setIsDataLoading(true);
      const response = await axiosClient.get("/users", {
        params: filterParams,
      });
      setDatas(response.data.data);
      setPagination({
        links: response.data.links,
        meta: response.data.meta,
      });
      toast.success(response.data.message);
    } finally {
      setIsDataLoading(false);
    }
  };

  useEffect(() => {
    handleCancelEdit();
    fetchUsers();
  }, [filterParams]);

  const handlePageChange = (page) => {
    setFilterParams({
      ...filterParams,
      page,
    });
  };

  const generateDetailsFields = () => {
    const fields = [
      { label: "Name", key: "name" },
      { label: "Email", key: "email" },
      { label: "Username", key: "username" },
      { label: "Phone Number", key: "phone_number" },
      { label: "Gender", key: "gender" },
      { label: "Country", key: "country.name" },
      { label: "State", key: "state.name" },
      { label: "City", key: "city.name" },
      { label: "Title", key: "title" },
      { label: "Firebase Token", key: "fcm_token" },
      { label: "OTP", key: "otp" },
      { label: "Is Admin", key: "is_admin" },
      { label: "Is Vendor", key: "is_vendor" },
      { label: "Is Active", key: "is_active" },
      { label: "Is Banned", key: "is_banned" },
      { label: "Email Verified At", key: "email_verified_at" },
      { label: "Last Login At", key: "last_login_at" },
      { label: "Current Login At", key: "current_login_at" },
      { label: "Last Login IP", key: "last_login_ip" },
      { label: "Current Login IP", key: "current_login_ip" },
      { label: "Login Count", key: "login_count" },
      { label: "Created At", key: "created_at" },
      { label: "Updated At", key: "updated_at" },
      { label: "Deleted At", key: "deleted_at" },
      { label: "Created At (Formatted)", key: "createdAtFormat" },
    ];

    return fields.map((field) => (
      <DetailsField key={field.label}>
        <DetailsLabel>{field.label}:</DetailsLabel>
        <DetailsValue>
          {getFieldValue(dataDetails, field.key) || "N/A"}
        </DetailsValue>
      </DetailsField>
    ));
  };

  const getFieldValue = (object, key) => {
    const keys = key.split(".");
    return keys.reduce(
      (obj, k) => (obj && obj[k] !== "undefined" ? obj[k] : null),
      object
    );
  };

  return (
    <DefaultLayout title="Users">
      <MainContainer>
        <FilterSection>
          <ButtonSection>
            <Button
              type="button"
              className="primary"
              onClick={handleCancelEdit}
            >
              Add User
            </Button>

            <Button type="button" className="success" onClick={toggleModal}>
              Export
            </Button>

            {isModalOpen && (
              <Modal
                title="Export User Data"
                content={exportModalContent}
                onClose={toggleModal}
                isLoading={isExportLoading}
                onAction={handleExport}
              />
            )}

            <Button
              type="button"
              className="info"
              onClick={toggleFilterVisibility}
            >
              {isFilterVisible ? "Hide" : "Show"} Filter
            </Button>
          </ButtonSection>

          {isFilterVisible && (
            <Card width="100%" maxwidth="100%">
              <Filter
                filterParams={filterParams}
                onFilterChange={handleFilterChange}
              />
            </Card>
          )}
        </FilterSection>

        <Container>
          <LeftSection>
            <Card width="100%" maxwidth="100%">
              {isDataLoading ? (
                <HorizontalLoadingSpinner progress={50} />
              ) : (
                <>
                  <DataList>
                    {datas && datas.length > 0 ? (
                      datas.map((user) => (
                        <DataItem key={user.id}>
                          {user.image && (
                            <ImageImage src={user.image} alt={user.name} />
                          )}
                          <DataInfo>
                            <DataListTitle
                              style={{ cursor: "pointer" }}
                              onClick={() => handleViewUser(user.id)}
                            >
                              {user.name}
                            </DataListTitle>
                            <DataListSubtitle>{user.email}</DataListSubtitle>
                            <OptionIcons>
                              <FiEdit
                                style={{ cursor: "pointer" }}
                                onClick={() => handleEditUser(user.id)}
                              />
                              <FiTrash2
                                style={{ cursor: "pointer", color: "red" }}
                                onClick={() => handleDeleteUser(user.id)}
                              />
                              <FiEye
                                style={{ cursor: "pointer" }}
                                onClick={() => handleViewUser(user.id)}
                              />
                            </OptionIcons>
                          </DataInfo>
                        </DataItem>
                      ))
                    ) : (
                      <p>No results found.</p>
                    )}
                  </DataList>

                  <Pagination
                    links={pagination.links}
                    meta={pagination.meta}
                    onPageChange={handlePageChange}
                  />
                </>
              )}
            </Card>
          </LeftSection>

          <RightSection>
            {isViewVisible && dataDetails && (
              <Card width="100%" maxwidth="100%">
                {isFetchLoading ? (
                  <HorizontalLoadingSpinner progress={50} />
                ) : (
                  <>
                    <DetailsImage
                      src={dataDetails.image}
                      alt={dataDetails.name}
                    />

                    <DetailsInfo>
                      <DetailsTitle>User Details</DetailsTitle>

                      {generateDetailsFields()}
                    </DetailsInfo>
                  </>
                )}
              </Card>
            )}

            {isEditVisible && (
              <Card width="100%" maxwidth="100%">
                <StyledTitle>{formTitle}</StyledTitle>
                <StyledSubtitle>
                  Step back into the excitement! 🌟
                </StyledSubtitle>
                <Form onSubmit={handleSave}>
                  <Select
                    name="title"
                    placeHolder="Select a title"
                    lefticon={<FiUserPlus />}
                    options={titleOptions}
                    multiple={false}
                    searchable={true}
                    onChange={(fieldName, newValue) =>
                      handleSelectChange(fieldName, newValue)
                    }
                    align="left"
                    margin="0 0 5px 0"
                    error={errors.title}
                  />
                  <Input
                    name="name"
                    lefticon={<FiUser />}
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(fieldName, newValue) =>
                      handleInputChange(fieldName, newValue)
                    }
                    margin="5px 0 5px 0"
                    error={errors.name}
                  />
                  <Input
                    name="email"
                    lefticon={<FiMail />}
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(fieldName, newValue) =>
                      handleInputChange(fieldName, newValue)
                    }
                    margin="5px 0 5px 0"
                    error={errors.email}
                  />
                  <Input
                    name="username"
                    lefticon={<FiUser />}
                    type="text"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={(fieldName, newValue) =>
                      handleInputChange(fieldName, newValue)
                    }
                    margin="5px 0 5px 0"
                    error={errors.username}
                  />
                  <Input
                    name="phone_number"
                    lefticon={<FiPhone />}
                    type="text"
                    placeholder="Enter your phone number"
                    value={formData.phone_number}
                    onChange={(fieldName, newValue) =>
                      handleInputChange(fieldName, newValue)
                    }
                    margin="5px 0 5px 0"
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
                  <DragDropFile
                    name="image"
                    onFilesSelected={(selectedFiles) =>
                      handleFileChange("image", selectedFiles)
                    }
                    multiple={isMultiple}
                    accept="*/*"
                    margin="5px 0 5px 0"
                    error={errors.image}
                  />
                  <Button
                    type="submit"
                    className="primary"
                    isLoading={isLoading}
                    margin="5px 0 5px 0"
                  >
                    {buttonText}
                  </Button>
                  <Button
                    type="button"
                    className="secondary"
                    onClick={handleCancelEdit}
                    margin="5px 0 0 0"
                  >
                    Cancel
                  </Button>
                </Form>
              </Card>
            )}
          </RightSection>
        </Container>
      </MainContainer>
    </DefaultLayout>
  );
};

export default Users;

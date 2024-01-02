import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { response } = error;

      switch (response.status) {
        case 401:
          handleErrorResponse(response.data.message);
          break;
        case 422:
          handleValidationErrors(response.data.errors);
          break;
        default:
          handleErrorResponse(
            response.data.message ||
              "An error occurred while processing your request"
          );
      }
    } else if (error.request) {
      handleErrorResponse("No response from the server");
    } else {
      handleErrorResponse("Error setting up the request");
    }

    return Promise.reject(error);
  }
);

let handleErrorCallback;

export const setHandleErrorCallback = (callback) => {
  handleErrorCallback = callback;
};

const handleValidationErrors = (errors) => {
  Object.keys(errors).forEach((fieldName) => {
    const errorMessages = errors[fieldName];

    // Check if there are multiple error messages for the field
    if (Array.isArray(errorMessages)) {
      const joinedMessages = errorMessages.join("\n");
      handleErrorResponse(`${fieldName}: ${joinedMessages}`);
    } else {
      handleErrorResponse(`${fieldName}: ${errorMessages}`);
    }
  });
};

const handleErrorResponse = (errorMessage) => {
  if (handleErrorCallback) {
    handleErrorCallback(errorMessage);
  } else {
    // console.error(errorMessage);
  }
};

export default axiosClient;

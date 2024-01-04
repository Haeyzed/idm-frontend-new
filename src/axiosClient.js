import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

let handleGenericErrorCallback;
let handleUnauthorizedErrorCallback;
let handleValidationErrorCallback;
let handleDefaultErrorCallback;
let redirectCallback;

export const setHandleGenericErrorCallback = (callback) => {
  handleGenericErrorCallback = callback;
};

export const setHandleUnauthorizedErrorCallback = (callback) => {
  handleUnauthorizedErrorCallback = callback;
};

export const setHandleValidationErrorCallback = (callback) => {
  handleValidationErrorCallback = callback;
};

export const setHandleDefaultErrorCallback = (callback) => {
  handleDefaultErrorCallback = callback;
};

export const setRedirectCallback = (callback) => {
  redirectCallback = callback;
};

const handleErrorResponse = (error) => {
  if (error.response) {
    const { response } = error;

    switch (response.status) {
      case 401:
        handleUnauthorizedErrorCallback(response);
        if (redirectCallback) {
          redirectCallback();
        }
        break;
      case 422:
        handleValidationErrorCallback(response);
        break;
      default:
        handleGenericErrorCallback(response);
    }
  } else if (error.request) {
    handleDefaultErrorCallback({
      data: { message: "No response from the server" },
    });
  } else {
    handleDefaultErrorCallback({
      data: { message: "Error setting up the request" },
    });
  }
};

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    handleErrorResponse(error);
    return Promise.reject(error);
  }
);

export default axiosClient;

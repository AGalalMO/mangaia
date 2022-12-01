import axios from "axios";
// config
// ----------------------------------------------------------------------
const axiosInstance = axios.create();
axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;

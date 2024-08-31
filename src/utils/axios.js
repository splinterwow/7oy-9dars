import axios from "axios";
import { toast } from "react-hot-toast";

const Axios = axios.create({
  baseURL: "https://api.kinopoisk.dev/v1.4",
  headers: {
    "X-API-KEY": "Z95NM1Z-SD44EGA-GQ8QVTP-VA07DE7",
  },
});

// Request Interceptor
Axios.interceptors.request.use(
  (config) => {
    console.log("Request started", config);
    return config;
  },
  (error) => {
    console.error("Request error", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
Axios.interceptors.response.use(
  (response) => {
    console.log("Response received", response);
    return response;
  },
  (error) => {
    console.error("Response error", error);
    toast.error("Failed to fetch data!");
    return Promise.reject(error);
  }
);

export default Axios;

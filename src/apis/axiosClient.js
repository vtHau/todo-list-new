import axios from "axios";

const axiosClient = axios.create({
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
});

axiosClient.defaults.withCredentials = true;
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
    }
    throw error;
  }
);

export default axiosClient;

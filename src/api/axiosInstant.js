import axios from "axios";

const request = axios.create({
  baseURL: "https://gis-final.onrender.com/api",
});

request.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    return error;
  }
);

export default request;

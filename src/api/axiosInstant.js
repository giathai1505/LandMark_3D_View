import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:5000/api",
});

request.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    return error.response.data;
  }
);

export default request;

import request from "./axiosInstant";

class authAPI {
  register = (params) => {
    const url = "/auth/register";
    return request.post(url, params);
  };
  login = (params) => {
    const url = "/auth/login";
    return request.post(url, params);
  };
}

const AuthAPI = new authAPI();
export default AuthAPI;

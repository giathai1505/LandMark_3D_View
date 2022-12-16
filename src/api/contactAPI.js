import request from "./axiosInstant";

class contactAPI {
  getAll = () => {
    const url = "/comment";
    return request.get(url);
  };
  create = (params) => {
    const url = "/comment/create";
    return request.post(url, params);
  };
}

const ContactAPI = new contactAPI();
export default ContactAPI;

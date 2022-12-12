import request from "./axiosInstant";

class commentAPI {
  getAll = () => {
    const url = "/feedback";
    return request.get(url);
  };
  create = (params) => {
    const url = "/feedback/create";
    return request.post(url, params);
  };
}

const CommentAPI = new commentAPI();
export default CommentAPI;

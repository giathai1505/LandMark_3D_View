import request from "./axiosInstant";

class arcGisAPI {
  getData = () => {
    const url = "/arcgis";
    return request.get(url);
  };
}

const ArcGisAPI = new arcGisAPI();
export default ArcGisAPI;

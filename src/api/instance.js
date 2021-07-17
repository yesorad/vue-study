import axios from "axios";

const API_URL = "http://sjahn.pythonanywhere.com/api";

const instance = axios.create({ baseURL: API_URL });

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (e) => {
    return Promise.reject(e);
  }
);

instance.interceptors.request.use(
  (request) => {
    return request;
  },
  (e) => {
    return Promise.reject(e);
  }
);

export default instance;

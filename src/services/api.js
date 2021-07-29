import axios from "axios";
import auth from './auth'

const api = axios.create({
	baseURL: "http://alterdata-5-back-end.herokuapp.com/api/",
	//baseURL: "http://localhost:8080/api/",
});

api.interceptors.request.use(async config => {
  const token = auth.getToken();
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default api;

import axios from "axios";

const api = axios.create({
	baseURL: "http://alterdata-5-back-end.herokuapp.com/api/",
});

export default api;

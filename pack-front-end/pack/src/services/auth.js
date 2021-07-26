import api from "./api";

const isAuthenticated = () => localStorage.getItem("@token-jwt") !== null;
const getToken = () => localStorage.getItem("@token-jwt");
const recuperarToken = (token) => {
	localStorage.setItem("@JWT-Token", token);
};
const logout = () => localStorage.removeItem("@JWT-Token");
const fazerLogin = async (credenciais) => {
	try {
		return await api.post(`login`, credenciais);
	} catch (e) {
		return e.response;
	}
};

export default {
	isAuthenticated,
	getToken,
	recuperarToken,
	logout,
	fazerLogin,
};

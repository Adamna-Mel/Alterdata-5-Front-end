import api from "./api";

const isAuthenticated = () => localStorage.getItem("@token-jwt") !== null
const getToken = () => localStorage.getItem("@token-jwt");
const guardarToken = (token) => {
	localStorage.setItem("@token-jwt", token);
};
const logout = () => localStorage.removeItem("@token-jwt");
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
	guardarToken,
	logout,
	fazerLogin,
};

import api from "./api";

const isAuthenticated = () => localStorage.getItem("@token-jwt") !== null;
const getToken = () => localStorage.getItem("@token-jwt");
const guardarToken = (token, id) => {
	localStorage.setItem("@token-jwt", token);
	localStorage.setItem("@user-id", id);
};
const logout = () => {
	localStorage.removeItem("@token-jwt");
	localStorage.removeItem("@user-id");
};
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

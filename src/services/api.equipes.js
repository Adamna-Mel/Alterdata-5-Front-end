import api from "./api";

const obterEquipes = async (size, page) => {
	try {
		const { data } = await api.get(`equipes?size=${size}&page=${page}`);
		return data;
	} catch (e) {
		return e.response;
	}
};

const obterEquipesPorId = async (id) => {
	try {
		const { data } = await api.get(`equipes/${id}`);
		return data;
	} catch (e) {
		return e.response;
	}
};

const obterEquipesPorNome = async (nome, size, page) => {
	try {
		const { data } = await api.get(
			`equipes/nome/${nome}?size=${size}&page=${page}`
		);
		return data;
	} catch (e) {
		return e.response;
	}
};

const adicionarEquipe = async (novoEquipe) => {
	try {
		return await api.post(`equipes`, novoEquipe);
	} catch (e) {
		return e.response;
	}
};

const atualizarEquipe = async (id, equipeAtualizada) => {
	try {
		const { data } = await api.put(`equipes/${id}`, equipeAtualizada);
		return data;
	} catch (e) {
		return e.response;
	}
};

const apagarEquipe = async (id) => {
	try {
		return await api.delete(`equipes/${id}`);
	} catch (e) {
		return e.response;
	}
};

const obterUsuariosPorLogin = async (id, login, size, page) => {
	try {
		return await api.get(
			`equipes/${id}/login/${login}?size=${size}&page=${page}`
		);
	} catch (e) {
		return e.response;
	}
};

const alterarAvatar = async (id, avatar) => {
	try {
		return await api.patch(`equipes/alterar-avatar/${id}`, avatar);
	} catch (e) {
		return e.response;
	}
};

const obterAvatar = async (id) => {
	try {
		return await api.get(`equipes/avatar/${id}`);
	} catch (e) {
		return e.response;
	}
};

export default {
	obterEquipes,
	obterEquipesPorId,
	obterEquipesPorNome,
	adicionarEquipe,
	atualizarEquipe,
	apagarEquipe,
	obterUsuariosPorLogin,
	alterarAvatar,
	obterAvatar,
};

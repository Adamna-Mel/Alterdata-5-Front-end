import api from "./api";

const obterEquipes = async () => {
	try {
		const { data } = await api.get("equipes");
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

const obterEquipesPorNome = async (nome) => {
	try {
		const { data } = await api.get(`equipes/nome/${nome}`);
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

export default {
	obterEquipes,
	obterEquipesPorId,
	obterEquipesPorNome,
	adicionarEquipe,
	atualizarEquipe,
	apagarEquipe,
};

import api from "./api";

const obterequipes = async () => {
	try {
		const { data } = await api.get("equipes");
		return data;
	} catch (e) {
		console.log(e);
	}
};

const obterequipesId = async (id) => {
	try {
		const { data } = await api.get(`equipes/${id}`);
		return data;
	} catch (e) {
		console.log(e);
	}
};

const obterequipesNome = async (nome) => {
	try {
		const { data } = await api.get(`equipes/nome/${nome}`);
		return data;
	} catch (e) {
		console.log(e);
	}
};

const adicionarTime = async (novoTime) => {
	try {
		return await api.post(`equipes`, novoTime);
	} catch (e) {
		console.log(e);
	}
};

const atualizarTime = async (id, timeAtualizado) => {
	try {
		const { data } = await api.put(`equipes/${id}`, timeAtualizado);
		return data;
	} catch (e) {
		console.log(e);
	}
};

const apagarTime = async (id) => {
	try {
		return await api.delete(`equipes/${id}`);
	} catch (e) {
		console.log(e);
	}
};

export default {
	obterequipes,
	obterequipesId,
	obterequipesNome,
	adicionarTime,
	atualizarTime,
	apagarTime,
};

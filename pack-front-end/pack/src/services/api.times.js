import api from "./api";

const obterTimes = async () => {
	try {
		const { data } = await api.get("times");
		return data;
	} catch (e) {
		console.log(e);
	}
};

const obterTimesId = async (id) => {
	try {
		const { data } = await api.get(`times/${id}`);
		return data;
	} catch (e) {
		console.log(e);
	}
};

const obterTimesNome = async (nome) => {
	try {
		const { data } = await api.get(`times/nome/${nome}`);
		return data;
	} catch (e) {
		console.log(e);
	}
};

const adicionarTime = async (novoTime) => {
	try {
		return await api.post(`times`, novoTime);
	} catch (e) {
		console.log(e);
	}
};

const atualizarTime = async (id, timeAtualizado) => {
	try {
		const { data } = await api.put(`times/${id}`, timeAtualizado);
		return data;
	} catch (e) {
		console.log(e);
	}
};

const apagarTime = async (id) => {
	try {
		return await api.delete(`times/${id}`);
	} catch (e) {
		console.log(e);
	}
};

export default {
	obterTimes,
	obterTimesId,
	obterTimesNome,
	adicionarTime,
	atualizarTime,
	apagarTime,
};

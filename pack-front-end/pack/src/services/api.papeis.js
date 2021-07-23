import api from "./api";

const obterPepeis = async () => {
	try {
		const { data } = await api.get("cargos");
		return data;
	} catch (e) {
		console.log(e);
	}
};

const obterPepeisId = async (id) => {
	try {
		const { data } = await api.get(`cargos/${id}`);
		return data;
	} catch (e) {
		console.log(e);
	}
};

const obterPepeisNome = async (nome) => {
	try {
		const { data } = await api.get(`cargos/nome/${nome}`);
		return data;
	} catch (e) {
		console.log(e);
	}
};

const adicionarPapel = async (novoPapel) => {
	try {
		return await api.post("cargos", novoPapel);
	} catch (e) {
		console.log(e);
	}
};

const atualizarPapel = async (id, papelAtualizado) => {
	try {
		const { data } = await api.put(`cargos/${id}`, papelAtualizado);
		return data;
	} catch (e) {
		console.log(e);
	}
};

const apagarPapel = async (id) => {
	try {
		return await api.delete(`cargos/${id}`);
	} catch (e) {
		console.log(e);
	}
};

export default {
	obterPepeis,
	obterPepeisId,
	obterPepeisNome,
	adicionarPapel,
	atualizarPapel,
	apagarPapel,
};

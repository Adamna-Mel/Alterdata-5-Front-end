import api from "./api";

const obterPepeis = async () => {
	try {
		const { data } = await api.get("papeis");
		return data;
	} catch (e) {
		console.log(e);
	}
};

const obterPepeisId = async (id) => {
	try {
		const { data } = await api.get(`papeis/${id}`);
		return data;
	} catch (e) {
		console.log(e);
	}
};

const obterPepeisNome = async (nome) => {
	try {
		const { data } = await api.get(`papeis/nome/${nome}`);
		return data;
	} catch (e) {
		console.log(e);
	}
};

const adicionarPapel = async (novoPapel) => {
	try {
		return await api.post("papeis", novoPapel);
	} catch (e) {
		console.log(e);
	}
};

const atualizarPapel = async (id, papelAtualizado) => {
	try {
		const { data } = await api.put(`papeis/${id}`, papelAtualizado);
		return data;
	} catch (e) {
		console.log(e);
	}
};

const apagarPapel = async (id) => {
	try {
		return await api.delete(`papeis/${id}`);
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

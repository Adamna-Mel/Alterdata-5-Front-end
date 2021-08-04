import api from "./api";

const obterCargos = async (size, page) => {
	try {
		const { data } = await api.get(`cargos?size=${size}&page=${page}`);
		return data;
	} catch (e) {
		return e.response;
	}
};

const obterCargoPorId = async (id) => {
	try {
		const { data } = await api.get(`cargos/${id}`);
		return data;
	} catch (e) {
		return e.response;
	}
};

const obterCargosPorNome = async (nome, size, page) => {
	try {
		const { data } = await api.get(
			`cargos/nome/${nome}?size=${size}&page=${page}`
		);
		return data;
	} catch (e) {
		return e.response;
	}
};

const adicionarCargo = async (novoCargo) => {
	try {
		return await api.post("cargos", novoCargo);
	} catch (e) {
		return e.response;
	}
};

const atualizarCargo = async (id, cargoAtualizado) => {
	try {
		return await api.put(`cargos/${id}`, cargoAtualizado);
	} catch (e) {
		return e.response;
	}
};

const apagarCargo = async (id) => {
	try {
		return await api.delete(`cargos/${id}`);
	} catch (e) {
		return e.response;
	}
};

const alterarAvatar = async (id, avatar) => {
	try {
		return await api.patch(`cargos/alterar-avatar/${id}`, avatar);
	} catch (e) {
		return e.response;
	}
};

const obterAvatar = async (id) => {
	try {
		return await api.get(`cargos/avatar/${id}`);
	} catch (e) {
		return e.response;
	}
};

export default {
	obterCargos,
	obterCargoPorId,
	obterCargosPorNome,
	adicionarCargo,
	atualizarCargo,
	apagarCargo,
	alterarAvatar,
	obterAvatar,
};

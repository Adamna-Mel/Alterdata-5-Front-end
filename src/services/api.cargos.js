import api from "./api";

const obterCargos = async () => {
	try {
		const { data } = await api.get("cargos");
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

const obterCargosPorNome = async (nome) => {
	try {
		const { data } = await api.get(`cargos/nome/${nome}`);
		return data;
	} catch (e) {
		return e.response;
	}
};

const adicionarCargo = async (novoCargo) => {
	try {
		return await api.post("cargos", novoCargo).headers({
			headers: {
				"Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
			},
		});
	} catch (e) {
		return e.response;
	}
};

const atualizarCargo = async (id, cargoAtualizado) => {
	try {
		const { data } = await api.put(`cargos/${id}`, cargoAtualizado);
		return data;
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

export default {
	obterCargos,
	obterCargoPorId,
	obterCargosPorNome,
	adicionarCargo,
	atualizarCargo,
	apagarCargo,
};

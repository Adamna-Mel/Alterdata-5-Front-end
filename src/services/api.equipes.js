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
		return await api.post(`equipes`, novoEquipe).headers({
			headers: {
				"Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
			},
		});
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

const obterUsuariosPorLogin = async (id, login) => {
	try {
		return await api.get(`equipes/${id}/login/${login}`);
	} catch (e) {
		return e.response;
	}
};

const alterarAvatar = async (id, avatar) => {
	try {
		return await api.patch.apply(`equipes/alterar-avatar/${id}`, avatar);
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

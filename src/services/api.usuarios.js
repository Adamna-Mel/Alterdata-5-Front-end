import api from "./api";

const obterUsuarios = async (size, page) => {
	try {
		const { data } = await api.get(`usuarios?size=${size}&page=${page}`);
		return data;
	} catch (e) {
		return e.response;
	}
};

const obterUsuarioPorId = async (id) => {
	try {
		const { data } = await api.get(`usuarios/${id}`);
		return data;
	} catch (e) {
		return e.response;
	}
};

const obterUsuariosPorLogin = async (login, size, page) => {
	try {
		const { data } = await api.get(
			`usuarios/login/${login}?size=${size}&page=${page}`
		);
		return data;
	} catch (e) {
		return e.response;
	}
};

const adicionarUsuario = async (novoUsuario) => {
	try {
		return await (
			await api.post("usuarios", novoUsuario)
		).headers({
			headers: {
				"Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
			},
		});
	} catch (e) {
		return e.response;
	}
};

const atualizarUsuario = async (id, usuarioAtualizado) => {
	try {
		return await api.put(`usuarios/${id}`, usuarioAtualizado);
	} catch (e) {
		return e.response;
	}
};

const apagarUsuario = async (id) => {
	try {
		return await api.delete(`usuarios/${id}`);
	} catch (e) {
		return e.response;
	}
};

const editarStatus = async (id, novoStatus) => {
	try {
		return await api.patch(`usuarios/status/${id}`, novoStatus);
	} catch (e) {
		return e.response;
	}
};

const editarPapel = async (id, idPapel) => {
	try {
		return await api.patch(`usuarios/${id}/cargo/${idPapel}`);
	} catch (e) {
		return e.response;
	}
};

const editarTime = async (id, idTime) => {
	try {
		return await api.patch(`usuarios/${id}/equipe/${idTime}`);
	} catch (e) {
		return e.response;
	}
};

const obterAvatar = async (id) => {
	try {
		return await api.get(`usuarios/avatar/${id}`);
	} catch (e) {
		return e.response;
	}
};

const sairDaEquipe = async (id) => {
	try {
		return await api.delete(`usuarios/sair-da-equipe/${id}`);
	} catch (e) {
		return e.response;
	}
};

const alterarAvatar = async (id, avatar) => {
	try {
		return await api.patch.apply(`usuarios/alterar-avatar/${id}`, avatar);
	} catch (e) {
		return e.response;
	}
};

export default {
	obterUsuarios,
	obterUsuariosPorLogin,
	obterUsuarioPorId,
	adicionarUsuario,
	atualizarUsuario,
	apagarUsuario,
	editarStatus,
	editarPapel,
	editarTime,
	obterAvatar,
	sairDaEquipe,
	alterarAvatar,
};

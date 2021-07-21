import api from "./api";

const obterUsuarios = async () => {
	try {
		const { data } = await api.get("usuarios");
		return data;
	} catch (e) {
		console.log(e);
	}
};

const obterUsuariosPorId = async (id) => {
	try {
		const { data } = await api.get(`usuarios/${id}`);
		return data;
	} catch (e) {
		console.log(e);
	}
};

const obterUsuariosPorLogin = async (login) => {
	try {
		const { data } = await api.get(`usuarios/login/${login}`);
		return data;
	} catch (e) {
		console.log(e);
	}
};

const adicionarUsuario = async (novoUsuario) => {
	try {
		return await api.post("usuarios", novoUsuario);
	} catch (e) {
		console.log(e);
	}
};

const atualizarUsuario = async (id, usuarioAtualizado) => {
	try {
		const { data } = await api.put(`usuarios/${id}`, usuarioAtualizado);
		return data;
	} catch (e) {
		console.log(e);
	}
};

const apagarUsuario = async (id) => {
	try {
		return await api.delete(`usuarios/${id}`);
	} catch (e) {
		console.log(e);
	}
};

const editarUsuario = async (id, usuarioEditado) => {
	try {
		return await api.patch(`usuarios/${id}`, usuarioEditado);
	} catch (e) {
		console.log(e);
	}
};

export default {
	obterUsuarios,
	obterUsuariosPorLogin,
	obterUsuariosPorId,
	adicionarUsuario,
	atualizarUsuario,
	apagarUsuario,
	editarUsuario,
};

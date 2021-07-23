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

const editarStatus = async (id, novoStatus) => {
  try {
    return await api.patch(`usuarios/${id}`, novoStatus);
  } catch (e) {
    console.log(e);
  }
};

const editarCargo = async (id, idCargo) => {
  try {
    return await api.patch(`usuarios/${id}/cargo/${idCargo}`);
  } catch (e) {
    console.log(e);
  }
};

const editarEquipe = async (id, idEquipe) => {
  try {
    return await api.patch(`usuarios/${id}/equipe/${idEquipe}`);
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
  editarStatus,
  editarCargo,
  editarEquipe,
};

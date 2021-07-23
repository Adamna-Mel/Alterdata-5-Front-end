import api from "./api";

const obterCargos = async () => {
  try {
    const { data } = await api.get("cargos");
    return data;
  } catch (e) {
    console.log(e);
  }
};

const obterCargosId = async (id) => {
  try {
    const { data } = await api.get(`cargos/${id}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

const obterCargosNome = async (nome) => {
  try {
    const { data } = await api.get(`cargos/nome/${nome}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

const adicionarCargo = async (novoCargo) => {
  try {
    return await api.post("cargos", novoCargo);
  } catch (e) {
    console.log(e);
  }
};

const atualizarCargo = async (id, cargoAtualizado) => {
  try {
    const { data } = await api.put(`cargos/${id}`, cargoAtualizado);
    return data;
  } catch (e) {
    console.log(e);
  }
};

const apagarCargo = async (id) => {
  try {
    return await api.delete(`cargos/${id}`);
  } catch (e) {
    console.log(e);
  }
};

export default {
  obterCargos,
  obterCargosId,
  obterCargosNome,
  adicionarCargo,
  atualizarCargo,
  apagarCargo,
};

import React from "react";

import apiCargos from "../../../services/api.cargos";

function Create() {
  const [nome, setNome] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoCargo = {
      nome,
    };

    apiCargos
      .adicionarCargo(novoCargo)
      .then(alert("Cargo criado com sucesso!"))
      .catch(alert("Algo deu errado!"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome..."
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button type="submit">Salvar</button>
      <button type="button">voltar</button>
    </form>
  );
}

export default Create;

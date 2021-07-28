import React from "react";

//MATERIAL-UI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

//SERVICES
import apiEquipes from "../../../services/api.equipes";

function Create() {
  const [nome, SetNome] = React.useState("");

  const idUsuario = localStorage.getItem("@user-id");

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaEquipe = {
      nome,
    };

    apiEquipes.adicionarEquipe(novaEquipe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        required
        id="filled-required"
        label="Nome da Equipe"
        defaultValue=""
        variant="filled"
        onChange={(e) => SetNome(e.target.value)}
        value={nome}
        type="text"
      />
      <Button variant="contained" color="primary" type="submit">
        Criar
      </Button>
    </form>
  );
}

export default Create;

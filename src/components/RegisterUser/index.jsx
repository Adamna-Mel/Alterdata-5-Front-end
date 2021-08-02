import React from "react";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import avatar from "../../assets/3-4.png";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import axios from "axios";

import apiUsuarios from "../../services/api.usuarios";

import useWindowDimensions from "../../hooks/WindowDimension";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function RegisterUser() {
  const [nome, setNome] = React.useState("");
  const [login, setLogin] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [imagem, setImagem] = React.useState(null);
  const [caminho, setCaminho] = React.useState(null);

  const papercss = {
    padding: "25px 20px",
    width: 400,
    margin: "30px auto",
    borderRadius: 20,
  };

  const handleClick = (e) => {
    e.preventDefault();

    let file = imagem;

    let formData = new FormData();

    formData.append("img", file);
    formData.append("nome", nome);
    formData.append("email", email);
    formData.append("senha", senha);
    formData.append("status", status);
    formData.append("login", login);

    apiUsuarios.adicionarUsuario(formData).then((res) => console.log(res));
  };

  const handleFile = (e) => {
    let file = e.target.files[0];

    setImagem(file);
    setCaminho(URL.createObjectURL(e.target.files[0]));
  };

  //Snackbar/Alert
  //AlertSucess

  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  //

  //Alert Error

  const [openAlertError, setOpenAlertError] = React.useState(false);

  const handleClickAlertError = () => {
    setOpenAlertError(true);
  };

  const handleCloseAlertError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlertError(false);
  };

  //

  const { height, width } = useWindowDimensions();

  return (
    <div style={{ height: height, marginTop: 100 }}>
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity="success">
          Usuário cadastrado com sucesso!!!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openAlertError}
        autoHideDuration={4000}
        onClose={handleCloseAlertError}
      >
        <Alert onClose={handleCloseAlertError} severity="error">
          Houve algum erro ao cadastrar o usuário.
        </Alert>
      </Snackbar>
      <Grid>
        <Paper elevation={7} style={papercss}>
          <Grid align="center">
            <img
              src={caminho}
              style={{
                width: 100,
                height: 100,
                borderRadius: 400 / 2,
                borderStyle: "solid",
                borderColor: "#0083C1",
                marginTop: -80,
                borderWidth: 5,
                backgroundColor: "#F5F3F4",
              }}
            />
            <input type="file" onChange={handleFile} />
            <Typography style={{ fontSize: 30 }}>Cadastrar Usuário</Typography>
          </Grid>
          <form>
            <TextField
              variant="outlined"
              fullWidth
              label="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              style={{ marginBottom: 10 }}
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: 10 }}
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              style={{ marginBottom: 10 }}
            />
            <TextField
              variant="outlined"
              type="password"
              fullWidth
              label="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={{ marginBottom: 10 }}
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              style={{ marginBottom: 10 }}
            />
            <div style={{ marginTop: 10 }}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                onClick={handleClick}
              >
                Cadastrar
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: "50%" }}
              >
                Voltar
              </Button>
            </div>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

export default RegisterUser;

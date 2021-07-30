import React from "react";
import { useHistory } from "react-router-dom";

import Card from "@material-ui/core/Card";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import api from "../../services/api.usuarios";
import EscolhaAvatar from "../EscolhaAvatar";
import { Typography } from "@material-ui/core";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function UserProfile(props) {
  const [nome, setNome] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [login, setLogin] = React.useState("");
  const [avatar, setAvatar] = React.useState("");

  const history = useHistory();
  const home = () => {
    history.goBack();
    props.chamarAPI();
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

  const handleClick = (e) => {
    e.preventDefault();
    const novo = {
      nome: nome.trim(),
      status: status.trim(),
      senha: senha.trim(),
      login: login.trim(),
      avatar: avatar.trim(),
    };

    const validar =
      novo.nome.length !== 0 &&
      novo.senha.length !== 0 &&
      novo.login.length !== 0;

    if (validar) {
      api.adicionarUsuario(novo).then((res) => {
        if (res.status === 201) {
          setOpenAlert(true);
        } else {
          setOpenAlertError(true);
        }
      });
    } else {
      let msg = "";
      novo.nome.length === 0 ? (msg += " Nome") : null;
      novo.senha.length === 0 ? (msg += " Senha") : null;
      novo.login.length === 0 ? (msg += " Login") : null;
      setOpenAlertError(true);
    }
  };

  const classes = useStyles();

  return (
    <form className={classes.root}>
      <Card elevation={7} className={classes.card}>
        <div
          style={{
            alignSelf: "center",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Snackbar
            open={openAlert}
            autoHideDuration={6000}
            onClose={handleCloseAlert}
          >
            <Alert onClose={handleCloseAlert} severity="success">
              Usuário cadastrado com sucesso!!
            </Alert>
          </Snackbar>
          <Snackbar
            open={openAlertError}
            autoHideDuration={6000}
            onClose={handleCloseAlertError}
          >
            <Alert onClose={handleCloseAlertError} severity="error">
              Houve algum erro no cadastro. Confira se todos os campos estão
              preenchidos corretamente!
            </Alert>
          </Snackbar>

          <Typography>Cadastrar Usuário</Typography>
          <div
            style={{
              alignSelf: "center",
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              required
              id="filled-required"
              label="Nome (MAX. 20)"
              defaultValue=""
              variant="filled"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              type="text"
              inputProps={{ maxLength: 20 }}
              style={{ width: 300 }}
            />
            <TextField
              required
              id="filled-required"
              label="Login"
              defaultValue=""
              variant="filled"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
              type="text"
              style={{ width: 300 }}
            />
            <TextField
              required
              id="filled-required"
              label="Senha"
              defaultValue=""
              variant="filled"
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
              type="password"
              style={{ width: 300 }}
            />

            <TextField
              id="filled-required"
              label="Status (MAX. 25)"
              defaultValue=""
              variant="filled"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
              type="text"
              inputProps={{ maxLength: 25 }}
              style={{ width: 300 }}
            />
            <EscolhaAvatar />
          </div>

          <Button
            onClick={handleClick}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Enviar
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={home}
            className={classes.button}
          >
            Voltar
          </Button>
        </div>
      </Card>
    </form>
  );
}

const useStyles = makeStyles({
  button: {
    margin: 5,
  },
  root: {
    maxWidth: 600,
    margin: "auto",
    "& .MuiTextField-root": {
      margin: 5,
      width: "25ch",
    },
  },
  card: {
    justifyContent: "center",
    borderRadius: 20,
    maxWidth: 500,
    height: "auto",
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    margin: "10%",
    textAlign: "center",
  },
});

export default UserProfile;

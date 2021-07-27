import React from "react";
import { useParams, useHistory } from "react-router-dom";

import api from "../../services/api.usuarios";

import Card from "@material-ui/core/Card";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

//TODO: fazer tratamento
function AtualizarUsuario(props) {
  const [nome, setNome] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [cargo, setCargo] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [login, setLogin] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [equipe, setEquipe] = React.useState("");

  const { id } = useParams();

  let history = useHistory();

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

    console.log(id);

    const novo = {
      nome,
      login,
      status,
      senha,
      cargo,
      avatar,
      equipe,
    };

    const validar =
      novo.nome.length !== 0 ||
      novo.senha.length !== 0 ||
      novo.login.length !== 0;

    if (validar) {
      api.atualizarUsuario(id, novo).then((res) => {
        if (res.status === 200) {
          setOpenAlert(true);
          setNome("");
          setStatus("");
          setPapel("");
          setSenha("");
          setLogin("");
          setAvatar("");
          setTime("");
        } else {
          setOpenAlertError(true);
        }
      });
    } else {
      setOpenAlertError(true);
    }
  };

  const classes = useStyles();

  return (
    <form className={classes.root}>
      <Card className={classes.card}>
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
              Usuário atualizado com sucesso!!
            </Alert>
          </Snackbar>
          <Snackbar
            open={openAlertError}
            autoHideDuration={6000}
            onClose={handleCloseAlertError}
          >
            <Alert onClose={handleCloseAlertError} severity="error">
              Houve algum erro ao atualizar o usuário. Confira se todos os
              campos estão preenchidos corretamente!
            </Alert>
          </Snackbar>

          <h1 style={{ textAlign: "center" }}>Editar Usuário</h1>
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
              id="filled-required1"
              label="Nome (MAX. 20)"
              defaultValue=""
              variant="filled"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              type="text"
              inputProps={{ maxLength: 20 }}
            />

            <TextField
              required
              id="filled-required2"
              label="Login"
              defaultValue=""
              variant="filled"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
              type="text"
            />

            <TextField
              required
              id="filled-required3"
              label="Senha"
              defaultValue=""
              variant="filled"
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
              type="password"
            />

            <TextField
              id="filled-required4"
              label="Status (MAX. 25)"
              defaultValue=""
              variant="filled"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
              type="text"
              inputProps={{ maxLength: 25 }}
            />

            <TextField
              id="filled-required5"
              label="Cargo (MAX. 12)"
              defaultValue=""
              variant="filled"
              onChange={(e) => setCargo(e.target.value)}
              value={cargo}
              type="text"
              inputProps={{ maxLength: 12 }}
            />
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
export default AtualizarUsuario;

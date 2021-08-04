import React, { useEffect, useState, useContext } from "react";

import {
  Typography,
  Button,
  Fade,
  Backdrop,
  Modal,
  makeStyles,
  TextField,
  Input,
  Paper,
  Card,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { UserContext } from "../../../context/UserContext";

import apiUsuarios from "../../../services/api.usuarios";
import apiCargos from "../../../services/api.cargos";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

//TODO: ainda tem coisa para fazer (principalmente estilização)
function Assign({ idCargo, handleOpenList, contextApi }) {
  const context = useContext(UserContext);
  const [cargo, setCargo] = useState("");
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    apiUsuarios
      .obterUsuarioPorId(context.usuarioAtual)
      .then((res) => setUsuario(res.nome));
    apiCargos.obterCargoPorId(idCargo).then((res) => setCargo(res.nome));
  }, [idCargo]);

  const handleConfirm = () => {
    apiUsuarios.editarPapel(context.usuarioAtual, idCargo).then((res) => {
      res.status === 200 ? setOpenAlert(true) : setOpenAlertError(true);
      contextApi();
    });
  };

  const classes = useStyles();

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

  return (
    <Card elevation={0} className={classes.card}>
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity="success">
          Cargo atribuído com sucesso!!!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openAlertError}
        autoHideDuration={4000}
        onClose={handleCloseAlertError}
      >
        <Alert onClose={handleCloseAlertError} severity="error">
          Houve algum erro ao atribuir cargo.
        </Alert>
      </Snackbar>
      <Typography className={classes.txt}>
        Atribuir {cargo} a {usuario}
      </Typography>

      <div className={classes.buttons}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleConfirm}
        >
          Sim
        </Button>
        <Button
          onClick={handleOpenList}
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          Cancelar
        </Button>
      </div>
    </Card>
  );
}

export default Assign;

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "20%",
  },
  txt: {
    fontSize: 20,
    textAlign: "center",
  },
  buttons: {
    textAlign: "center",
  },
  button: {
    margin: 5,
  },
}));

const papercss = {
  padding: "25px 20px",
  width: 400,
  margin: "30px auto",
  borderRadius: 20,
};

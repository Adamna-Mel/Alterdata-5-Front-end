import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";

//SERVICES
import apiEquipes from "../../../services/api.equipes";

//HOOKS
import useWindowDimensions from "../../../hooks/WindowDimension";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Edit() {
  const [nome, setNome] = useState();

  const history = useHistory();
  const idEquipe = useLocation().state;
  const handleSubmit = (e) => {
    e.preventDefault();
    const novo = {
      nome,
    };
    apiEquipes
      .atualizarEquipe(idEquipe, novo)
      .then(setOpenAlert(true))
      .catch(setOpenAlertError(true));
  };

  const handleClick = () => {
    history.push("/");
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

  const classes = useStyles();

  return (
    <div style={{ height: height }}>
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity="success">
          Nome da equipe atualizada com sucesso!!!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openAlertError}
        autoHideDuration={4000}
        onClose={handleCloseAlertError}
      >
        <Alert onClose={handleCloseAlertError} severity="error">
          Houve algum erro ao mudar o nome da equipe.
        </Alert>
      </Snackbar>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>Editar Equipe</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              id="filled-required"
              label="Nome da equipe (MAX. 20)"
              defaultValue=""
              variant="filled"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              type="text"
              inputProps={{ maxLength: 20 }}
              style={{ width: 300 }}
            />
            <CardContent className={classes.buttonContainer}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Salvar
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                Voltar
              </Button>
            </CardContent>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Edit;

const useStyles = makeStyles({
  card: {
    borderRadius: 20,
    maxWidth: 400,
    height: "auto",
    marginTop: "5%",
    margin: "auto",
    justifyContent: "center",
    display: "flex",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },
  container: {
    marginTop: "auto",
    marginBottom: "auto",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    marginBottom: 5,
    marginTop: 5,
  },
});

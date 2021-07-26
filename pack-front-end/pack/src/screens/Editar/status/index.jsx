import React from "react";
import { useParams, useHistory } from "react-router";

import Card from "@material-ui/core/Card";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import api from "../../../services/api.usuarios";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function EditarStatus(props) {
  const { id } = useParams();

  const [status, setStatus] = React.useState("");

  const history = useHistory();
  const home = () => {
    history.push("/");
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

  const handleChange = () => {
    const novo = {
      status,
    };
    setOpenAlert(true);

    api.editarStatus(id, novo).then((res) => {
      console.log(res);
    });
  };

  const classes = useStyles();

  return (
    <form className={classes.root}>
      <Card className={classes.card}>
        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
        >
          <Alert onClose={handleCloseAlert} severity="success">
            Status atualizado com sucesso!!
          </Alert>
        </Snackbar>

        <h1 style={{ textAlign: "center" }}>Editar status</h1>
        <TextField
          id="filled-required"
          label="Status (MAX: 25)"
          defaultValue=""
          variant="filled"
          onChange={(e) => setStatus(e.target.value)}
          value={status}
          inputProps={{ maxLength: 25 }}
        />
        <div>
          <Button
            onClick={handleChange}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Salvar
          </Button>
          <Button
            variant="contained"
            onClick={home}
            color="secondary"
            className={classes.button}
          >
            Cancelar
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
    margin: "35%",
    textAlign: "center",
  },
});

export default EditarStatus;

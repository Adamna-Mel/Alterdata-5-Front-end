import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import api from "../../../services/api.equipes";
//import EscolhaAvatar from "../EscolhaAvatar";
import { Typography, Modal, Fade, Backdrop } from "@material-ui/core";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function NovaEquipe(props) {
  const [nome, setNome] = React.useState("");

  const handleCreate = () => {
    const novo = { nome };
    api.adicionarEquipe(novo);
  };

  const handleClose = () => {
    props.setOpenModal(false);
  };

  const classes = useStyles();

  return (
    <form className={classes.root}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.openModal}>
          <div
            className={classes.paper}
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
            <Button
              color="primary"
              variant="contained"
              onClick={handleCreate}
              className={classes.button}
            >
              Criar
            </Button>

            <Button
              variant="contained"
              onClick={handleClose}
              className={classes.button}
            >
              Voltar
            </Button>
          </div>
        </Fade>
      </Modal>
    </form>
  );
}

export default NovaEquipe;
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 20,
  },
  button: {
    marginTop: 15,
  },
  buttonDelete: {
    margin: 5,
    backgroundColor: "#F22",
    "&:hover": {
      backgroundColor: "#F00",
    },
  },
}));

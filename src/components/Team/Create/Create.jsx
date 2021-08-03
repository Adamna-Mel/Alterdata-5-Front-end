import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

import api from "../../../services/api.equipes";
//import EscolhaAvatar from "../EscolhaAvatar";
import { Typography, Modal, Fade, Backdrop } from "@material-ui/core";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function NovaEquipe(props) {
  const [nome, setNome] = React.useState("");
  const [imagem, setImagem] = React.useState(null);
  const [caminho, setCaminho] = React.useState(null);

  const handleCreate = () => {
    const formData = new FormData();

    formData.append("nome", nome);
    formData.append("img", imagem);

    api.adicionarEquipe(formData);
  };

  const handleClose = () => {
    props.setOpenModal(false);
  };

  const handleFile = (e) => {
    setImagem(e.target.files[0]);
    setCaminho(URL.createObjectURL(e.target.files[0]));
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
            <div style={{ marginLeft: "auto", marginRight: "auto" }}>
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
            </div>
            <Card elevation={0}>
              <input type="file" onChange={handleFile} />
            </Card>

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
  root: { justifyContent: "center" },
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

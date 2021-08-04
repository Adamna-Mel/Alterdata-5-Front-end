import React, { useState, useContext } from "react";

import {
  Button,
  Fade,
  Fab,
  Backdrop,
  Modal,
  makeStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import Create from "./Create/Create";
import List from "./List/List";

import apiUsuarios from "../../services/api.usuarios";
import apiCagos from "../../services/api.cargos";
import apiCargos from "../../services/api.cargos";

import { UserContext } from "../../context/UserContext";

function Edit({ openModalCargo, setOpenModalCargo }) {
  const context = useContext(UserContext);
  const [imagem, setImagem] = useState(null);
  const [caminho, setCaminho] = useState(null);
  const [criar, setCriar] = useState(false);
  const [size, setSize] = useState(8);
  const [page, setPage] = useState(0);

  const [existentes, setExistentes] = useState(true);
  const [lista, setLista] = useState([]);

  const api = () => {
    apiCargos.obterCargos(size, page).then((res) => {
      setLista(res);
    });
  };

  const handleClose = () => {
    setOpenModalCargo(false);
  };

  const handleOpenCriar = () => {
    setCriar(true);
    setExistentes(false);
  };

  const handleOpenExistentes = () => {
    setCriar(false);
    setExistentes(true);
  };

  const handleFile = (e) => {
    setImagem(e.target.files[0]);

    setCaminho(URL.createObjectURL(e.target.files[0]));
  };

  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModalCargo}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModalCargo}>
          <div className={classes.paper}>
            <div className={classes.sair}></div>
            <div className={classes.botoes}>
              <Fab
                variant="extended"
                color="primary"
                aria-label="add"
                onClick={handleOpenCriar}
                className={classes.add}
              >
                <AddIcon />
                Criar Novo Cargo
              </Fab>
            </div>

            {criar ? (
              <Create
                handleClose={handleClose}
                handleOpenExistentes={handleOpenExistentes}
                api={api}
                contextApi={context.api}
              />
            ) : null}

            {existentes ? (
              <List
                lista={lista}
                setSize={setSize}
                setPage={setPage}
                page={page}
                setLista={setLista}
                api={api}
                contextApi={context.api}
              />
            ) : null}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Edit;

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
    width: 370,
    height: 400,
  },
  button: {
    margin: 5,
  },
  buttonCancel: {
    margin: 5,
    backgroundColor: "#F22",
    "&:hover": {
      backgroundColor: "#F00",
    },
  },
  botoes: {
    justifyContent: "center",
    textAlign: "center",
  },
  sair: {
    justifyContent: "center",
    textAlign: "end",
  },
  x: {
    color: "red",
    marginBottom: "5px",
  },
  add: {
    marginBottom: 5,
  },
}));

const papercss = {
  padding: "25px 20px",
  width: 400,
  margin: "30px auto",
  borderRadius: 20,
};

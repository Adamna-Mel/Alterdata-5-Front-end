import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Typography, Button, Fade, Backdrop, Modal } from "@material-ui/core";

import apiEquipe from "../../../services/api.equipes";

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
    margin: 5,
  },
  buttonDelete: {
    margin: 5,
    backgroundColor: "#F22",
    "&:hover": {
      backgroundColor: "#F00",
    },
  },
}));

function Delete({ openModal, setOpenModal, idEquipe }) {
  const [equipe, setEquipe] = React.useState("");

  React.useEffect(() => {
    apiEquipe.obterEquipesPorId(idEquipe).then((res) => {
      setEquipe(res.nome);
    });
  }, [openModal]);

  const classes = useStyles();

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleDelete = () => {
    console.log(idEquipe);
    apiEquipe.apagarEquipe(idEquipe).then((res) => console.log(res));
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <Typography> Apagar a equipe {equipe}?</Typography>
            <Button
              // style={{  }}
              onClick={handleDelete}
              variant="contained"
              color="primary"
              className={classes.buttonDelete}
            >
              Sim
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Cancelar
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default Delete;

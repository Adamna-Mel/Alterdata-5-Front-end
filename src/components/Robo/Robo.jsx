import React, { useState } from "react";
import robo from "../../assets/3-4.png";
import "./estilo.css";
import { Typography, CardContent, Fab, Card } from "@material-ui/core";

import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import SearchIcon from "@material-ui/icons/Search";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function Robo() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <img src={robo} onClick={toggleModal} className="robo-modal" />
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-conteudo">
            <Card style={{ borderRadius: 20, padding: 10 }}>
              <Typography style={{ fontSize: 25, textAlign: "center" }}>
                AQUI VOCÊ PODE...
              </Typography>
              <CardContent style={{ textAlign: "left" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 5,
                  }}
                >
                  <PersonAddIcon />
                  <Typography>Adicionar Integrantes;</Typography>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 5,
                  }}
                >
                  <SupervisedUserCircleIcon />
                  <Typography>Criar sua equipe;</Typography>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 5,
                  }}
                >
                  <RecentActorsIcon />
                  <Typography>
                    Informar o status e o Cargo dos integrantes;
                  </Typography>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 5,
                  }}
                >
                  <SearchIcon />
                  <Typography>Filtrar Integrantes;</Typography>
                </div>
              </CardContent>
            </Card>
            <Fab
              className="fechar-modal"
              color="primary"
              aria-label="add"
              onClick={toggleModal}
            >
              <HighlightOffIcon />
            </Fab>
          </div>
        </div>
      )}
    </>
  );
}

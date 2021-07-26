import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "../../components/UserCard";

import apiEquipe from "../../services/api.times";

function Time(props) {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      {props.usuarios != undefined ? (
        props.usuarios.map((usuario) => (
          <Card
            key={usuario.id}
            id={usuario.id}
            name={usuario.nome}
            status={usuario.status}
            role={usuario.cargo.nome}
            avatar={usuario.avatar}
          />
        ))
      ) : (
        <h1>Time Vazio</h1>
      )}
    </div>
  );
}

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
});

export default Time;

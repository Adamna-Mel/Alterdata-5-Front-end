import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import UserCard from "../../components/UserCard";

import apiEquipe from "../../services/api.times";

function Time(props) {
  const classes = useStyles();

  return (
    <div className={classes.userCard}>
      {props.usuarios != undefined ? (
        props.usuarios.map((usuario) => (
          <UserCard
            key={usuario.id}
            id={usuario.id}
            name={usuario.nome}
            status={usuario.status}
            role={usuario.cargo.nome}
            avatar={usuario.avatar}
          />
        ))
      ) : (
        <Card>
          <h1>Time Vazio</h1>
        </Card>
      )}
    </div>
  );
}

const useStyles = makeStyles({
  userCard: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
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

export default Time;

import React from "react";
//import { Link, useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import TeamCard from "../components/TeamCard/TeamCard";
import api from "../services/api.equipes";
import apiUsuarios from "../services/api.usuarios";

function ListaDeEquipes() {
  const [equipes, setEquipes] = React.useState([]);

  React.useEffect(() => {
    api.obterEquipes().then((res) => {
      setEquipes(res);
    });
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.card}>
      {equipes.map((e) => (
        <div key={e.idEquipe}>
          <TeamCard key={e.id} id={e.id} name={e.nome} avatar={e.avatar} />

          {/* <button onClick={() => apiUsuarios.editarTime(id, e.idEquipe)}>
							Entrar
						</button> */}
        </div>
      ))}
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

export default ListaDeEquipes;

import React from "react";
//import { Link, useParams } from "react-router-dom";

//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

//COMPONENTS
import TeamCard from "../components/TeamCard/TeamCard";

//SERVICES
import api from "../services/api.equipes";
import apiUsuarios from "../services/api.usuarios";

function ListaDeEquipes() {
  const [loading, setLoading] = React.useState(false);
  const [equipes, setEquipes] = React.useState([]);

  React.useEffect(() => {
    api.obterEquipes().then((res) => {
      setEquipes(res);
    });
    setTimeout(() => {
      setLoading(true);
    }, 1300);
  }, []);

  const classes = useStyles();

  return (
    <div>
      {loading ? (
        <div>
          <Card elevation={0} className={classes.header}>
            <CardContent>
              <Typography className={classes.titulo}>
                Escolha uma equipe para entrar
              </Typography>
            </CardContent>
          </Card>
          <div className={classes.card}>
            {equipes.map((e) => (
              <div key={e.idEquipe}>
                <TeamCard
                  key={e.id}
                  id={e.id}
                  name={e.nome}
                  avatar={e.avatar}
                />

                {/* <button onClick={() => apiUsuarios.editarTime(id, e.idEquipe)}>
							Entrar
						</button> */}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <LinearProgress />
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
  titulo: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "auto",
    marginTop: "auto",
  },
  header: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 600,
    marginTop: 15,
    margin: "auto",
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#00000000",
  },
});

export default ListaDeEquipes;

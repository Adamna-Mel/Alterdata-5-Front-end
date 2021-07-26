import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";

import Card from "../../components/UserCard";
import apiUsuarios from "../../services/api.usuarios";
import apiEquipes from "../../services/api.times";

function Membros() {
  const { idUsuario } = useParams();
  const [usuarios, setUsuarios] = React.useState([]);

  // React.useEffect(() => {
  // 	apiUsuarios.obterUsuariosPorId(idUsuario).then((res) => {
  // 		apiEquipes.obterequipes().then((resposta) => {
  // 			resposta.map((r) => {
  // 				if (r.nome === res.equipe.nome) {
  // 					setUsuarios(r.membros);
  // 				}
  // 			});
  // 		});
  // 	});
  // }, []);

  const classes = useStyles();
  return (
    <div className={classes.card}>
      {usuarios != undefined ? (
        usuarios.map((usuario) => (
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

export default Membros;

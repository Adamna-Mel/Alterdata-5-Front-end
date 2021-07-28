import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

//SVGColor
import SvgColor from "react-svg-color";

//ASSETS
//icons
import Ninja from "../assets/icons/ninja.svg";

//COMPONENTS
import UserCard from "../components/UserCard/UserCard";

//SERVICES
import apiUsuarios from "../services/api.usuarios";
import apiEquipes from "../services/api.equipes";

function ListaDeUsuarios() {
  const idUsuario = localStorage.getItem("@user-id");

  const [idEquipe, setIdEquipe] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    console.log(idUsuario);
    apiUsuarios
      .obterUsuarioPorId(idUsuario)
      .then((res) => {
        setIdEquipe(res.equipe.idEquipe);
        apiEquipes.obterEquipesPorId(res.equipe.idEquipe).then((res) => {
          setUsuarios(res.membros);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const classes = useStyles();
  return (
    <>
      <div>
        <div className={classes.header}>
          <SvgColor svg={Ninja} width={90} colors={["#000000", "#0083C1"]} />
          <Typography className={classes.teamName}>
            COLOCAR NOME DO TIME AQUI
          </Typography>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              handleClose;
              history.push("editar-equipe", idEquipe);
            }}
          >
            Editar
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose;
              history.push("apagar-equipe", idEquipe);
            }}
          >
            Apagar
          </MenuItem>
        </Menu>
      </div>
      <div className={classes.card}>
        {usuarios != undefined ? (
          usuarios.map((usuario) => (
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
          <h1>Time Vazio</h1>
        )}
      </div>
    </>
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
  header: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 400,
    marginTop: 15,
    margin: "auto",
  },
  teamName: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ListaDeUsuarios;

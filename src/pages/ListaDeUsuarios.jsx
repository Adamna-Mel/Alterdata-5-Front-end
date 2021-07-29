import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Paper from "@material-ui/core/Paper";

//SVGColor
import SvgColor from "react-svg-color";

//ASSETS
//#region Icones
import CrystalShine from "../assets/icons/crystal-shine.svg";
import BatMask from "../assets/icons/bat-mask.svg";
import Clockwork from "../assets/icons/clockwork.svg";
import Controller from "../assets/icons/controller.svg";
import Daggers from "../assets/icons/daggers.svg";
import Fireball from "../assets/icons/fireball.svg";
import Hades from "../assets/icons/hades.svg";
import MineralHeart from "../assets/icons/mineral-heart.svg";
import MoonBat from "../assets/icons/moon-bats.svg";
import Mouse from "../assets/icons/mouse.svg";
import NightSky from "../assets/icons/night-sky.svg";
import Ninja from "../assets/icons/ninja.svg";
import NinjaCloud from "../assets/icons/ninja-cloud.svg";
import Palette from "../assets/icons/palette.svg";
import PawHeart from "../assets/icons/paw-heart.svg";
import PencilBrush from "../assets/icons/pencil-brush.svg";
import SharkBite from "../assets/icons/shark-bite.svg";
import Shuriken from "../assets/icons/shuriken.svg";
import Sly from "../assets/icons/sly.svg";
import Smartphone from "../assets/icons/smartphone.svg";
import Cancel from "../assets/icons/cancel.svg";
import Database from "../assets/icons/database.svg";
import Luchador from "../assets/icons/luchador.svg";

//#endregion

//COMPONENTS
import UserCard from "../components/UserCard/UserCard";

//SERVICES
import apiUsuarios from "../services/api.usuarios";
import apiEquipes from "../services/api.equipes";

function ListaDeUsuarios() {
  const idUsuario = localStorage.getItem("@user-id");

  const [idEquipe, setIdEquipe] = useState("");
  const [nomeDaEquipe, setNomeDaEquipe] = useState("");
  const [corPrimaria, setCorPrimaria] = useState("");
  const [corSecundaria, setCorSecundaria] = useState("");
  const [iconeEquipe, setIconeEquipe] = useState("");
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
          setNomeDaEquipe(res.nome);
          setCorPrimaria(res.cor1);
          setCorSecundaria(res.cor2);
          setIconeEquipe(res.icone);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function IconeDoTime() {
    return (
      <SvgColor
        svg={iconeEquipe}
        width={90}
        colors={[corPrimaria, corSecundaria]}
      />
    );
  }

  const classes = useStyles();
  return (
    <>
      <div>
        <Paper elevation={0} className={classes.header}>
          <IconeDoTime />
          <Typography className={classes.teamName}>{nomeDaEquipe}</Typography>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        </Paper>
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
            <span style={{ color: "red" }}>Apagar</span>
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
              role={usuario.cargo != null ? usuario.cargo.nome : "Sem cargo"}
              avatar={usuario.avatar}
              corcargo1={usuario.cargo.cor1}
              corcargo2={usuario.cargo.cor2}
              cargoicone={usuario.cargo.icone}
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
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#00000000",
  },
  teamName: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "auto",
    marginTop: "auto",
  },
  container: {},
});

export default ListaDeUsuarios;

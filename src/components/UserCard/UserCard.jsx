import React from "react";

//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

//SVGColor
import SvgColor from "react-svg-color";

//COMPONENTS
import CardOptions from "./CardOptions/CardOptions";
import StatusBar from "../StatusBar/StatusBar";

//ASSETS
//Icones
import CrystalShine from "../../assets/icons/crystal-shine.svg";
import CoffeeCup from "../../assets/icons/coffee-cup.svg";
import FireExtinguisher from "../../assets/icons/fire-extinguisher.svg";
import BatMask from "../../assets/icons/bat-mask.svg";
import Clockwork from "../../assets/icons/clockwork.svg";
import Controller from "../../assets/icons/controller.svg";
import Daggers from "../../assets/icons/daggers.svg";
import Fireball from "../../assets/icons/fireball.svg";
import Hades from "../../assets/icons/hades.svg";
import MineralHeart from "../../assets/icons/mineral-heart.svg";
import MoonBat from "../../assets/icons/moon-bats.svg";
import Mouse from "../../assets/icons/mouse.svg";
import NightSky from "../../assets/icons/night-sky.svg";
import Ninja from "../../assets/icons/ninja.svg";
import NinjaCloud from "../../assets/icons/ninja-cloud.svg";
import Palette from "../../assets/icons/palette.svg";
import PawHeart from "../../assets/icons/paw-heart.svg";
import PencilBrush from "../../assets/icons/pencil-brush.svg";
import SharkBite from "../../assets/icons/shark-bite.svg";
import Shuriken from "../../assets/icons/shuriken.svg";
import Sly from "../../assets/icons/sly.svg";
import Smartphone from "../../assets/icons/smartphone.svg";
import Cancel from "../../assets/icons/cancel.svg";
import Database from "../../assets/icons/database.svg";

function UserCard(props) {
  const classes = useStyles();
  function RoleAvatar(props) {
    if (props.icone === "Sem cargo" ){
      return (
        <SvgColor svg={Cancel} width={30} colors={["#cf1527", "#000000"]} />
      );
    } else if (props.icone == "FrontEnd") {
      return (
        <SvgColor svg={Palette} width={30} colors={["#FFFFFF", "#e8dbb7"]} />
      );
    } else if (props.icone == "BackEnd") {
      return (
        <SvgColor svg={Database} width={30} colors={["#787551", "#dbca12"]} />
      );
    } else {
      return (
        <SvgColor svg={Ninja} width={30} colors={["#000000", "#0083C1"]} />
      );
    }
  }
  return (
    <div>
      <Card className={classes.card} color="default">
        <CardContent className={classes.cardContent}>
          <div className={classes.cardTop}>
            <Avatar
              alt="Perfil"
              src="src/assets/profile.jpg"
              className={classes.profileImage}
            />
            <CardOptions id={props.id} />
          </div>
          <Typography className={classes.userName}>{props.name}</Typography>
          <Typography className={classes.userStatus}>
            <StatusBar
              id={props.id}
              status={props.status}
              className={classes.UserStatus}
            />
          </Typography>
          <CardContent className={classes.userRole}>
            <RoleAvatar icone={props.role} />
            <Typography className={classes.userRoleText}>
              {props.role}
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    </div>
  );
}
export default UserCard;

const useStyles = makeStyles({
  card: {
    borderRadius: 20,
    width: 300,
    height: "auto",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    textAlign: "center",
  },
  userStatus: {
    fontSize: 15,
    textAlign: "center",
  },
  profileImage: {
    height: 100,
    width: 100,
    marginLeft: 85,
  },
  cardContent: {
    alignItems: "center",
  },
  userRole: {
    backgroundColor: "#1A2228",
    borderRadius: 20,
    height: 22,
    width: 200,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    marginLeft: 18,
    verticalAlign: "center",
  },
  userRoleText: {
    fontSize: 20,
    color: "#ffffff",
    marginLeft: 10,
  },
  cardTop: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    columnGap: 30,
  },
});

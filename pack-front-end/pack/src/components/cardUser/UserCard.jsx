import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FullscreenExitTwoTone } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import SvgColor from "react-svg-color";

//Icones
import CrystalShine from "../../assets/icons/crystal-shine.svg";
import CoffeeCup from "../../assets/icons/coffee-cup.svg";
import Merge from "../../assets/icons/merge.svg";
import FireExtinguisher from "../../assets/icons/fire-extinguisher.svg";

import CardOptions from "./CardOptions";

function UserCard(props) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.cardTop}>
            <Avatar
              alt="Pefil"
              src="src/assets/profile.jpg"
              className={classes.profileImage}
            />
            <CardOptions id={props.id} />
          </div>

          <Typography className={classes.userName}>{props.nome}</Typography>
          {/* <CardMedia
                    className={classes.userRole}
                    image="src/assets/icons/crystal-shine.svg"
                    title="Icone"
                /> */}
          <CardContent className={classes.userRole}>
            <SvgColor svg={CoffeeCup} width={30} colors={["#0083C1"]} />
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
    backgroundColor: "#ffffff",
  },
  userName: {
    fontSize: 20,
    color: "#000000",
    textAlign: "center",
  },
  userStatus: {
    fontSize: 15,
    color: "#1A2228",
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
    marginTop: 50,
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

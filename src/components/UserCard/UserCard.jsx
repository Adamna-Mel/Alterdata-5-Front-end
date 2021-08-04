import React, { useState, useContext } from "react";

//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

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
import EditIcon from "@material-ui/icons/Edit";

import { UserContext } from "../../context/UserContext";

function UserCard(props) {
	const classes = useStyles();
	const context = useContext(UserContext);

	function RoleAvatar(props) {
		if (props.icone === "Sem cargo") {
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
			<Card elevation={7} className={classes.card} color="default">
				<CardContent className={classes.cardContent}>
					<div className={classes.cardTop}>
						<Avatar
							alt="Perfil"
							src={`http://alterdata-5-back-end.herokuapp.com/api/usuarios/avatar/${props.id}`}
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
						<SvgColor
							svg={props.cargoicone}
							width={200}
							colors={[props.corcargo1, props.corcargo2]}
						/>
						{props.idCargo !== null ? (
							<img
								src={`http://alterdata-5-back-end.herokuapp.com/api/cargos/avatar/${props.idCargo}`}
								style={{
									width: 30,
									height: 30,
									borderRadius: 400 / 2,
									borderStyle: "solid",
									borderColor: "#0083C1",
									borderWidth: 2,
									backgroundColor: "#F5F3F4",
								}}
							/>
						) : null}

						<Typography className={classes.userRoleText}>
							{props.role}
						</Typography>
						<Grid item xs={4} className={classes.edit}>
							<Typography
								onClick={() => {
									props.setOpenModalCargo(true);
									context.setUsuarioAtual(props.id);
								}}
							>
								<EditIcon />
							</Typography>
						</Grid>
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
		marginRight: 20,
		marginLeft: 20,
		marginTop: 20,
		marginBottom: 20,
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
		alignItems: "center",
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
	edit: {
		textAlign: "end",
		"&:hover": {
			color: "#999",
		},
	},
});

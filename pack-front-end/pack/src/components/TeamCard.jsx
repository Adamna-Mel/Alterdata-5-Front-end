import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import SvgColor from "react-svg-color";

//Icones
import CrystalShine from "../assets/icons/crystal-shine.svg";
import CoffeeCup from "../assets/icons/coffee-cup.svg";
import FireExtinguisher from "../assets/icons/fire-extinguisher.svg";
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

import CardOptions from "./CardOptions";


function TeamCard(props) {
	
	const classes = useStyles();
	
	return (
		<div>
			<Card className={classes.card} color="default">
				<CardContent className={classes.cardContent}>
					<div className={classes.cardTop}>
                    <SvgColor svg={Cancel} width={50} colors={["#cf1527", "#000000"]} />
					<Typography className={classes.teamName}>Nome do Time</Typography>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
export default TeamCard;

const useStyles = makeStyles({
	card: {
		borderRadius: 20,
		width: 400,
		height: 80,
		marginRight: 10,
		marginLeft: 10,
		marginTop: 10,
		marginBottom: 10,
	},
	teamName: {
		fontSize: 30,
		textAlign: "center",
	},
	cardContent: {
		alignItems: "center",
        justifyContent: "center",
        
	},
	cardTop: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
		columnGap: 10,
	},
});
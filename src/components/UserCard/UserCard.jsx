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

import EditIcon from "@material-ui/icons/Edit";

import imagemPadrao from "../../assets/profilepic.png";
import ImagemPadraoCargo from "../../assets/rolepic.png";

import { UserContext } from "../../context/UserContext";

function UserCard(props) {
	const classes = useStyles();
	const context = useContext(UserContext);

	return (
		<div>
			<Card elevation={7} className={classes.card} color="default">
				<CardContent className={classes.cardContent}>
					<div className={classes.cardTop}>
						{props.avatar ? (
							<Avatar
								alt="Perfil"
								src={`http://alterdata-5-back-end.herokuapp.com/api/usuarios/avatar/${props.id}`}
								className={classes.profileImage}
							/>
						) : (
							<Avatar
								alt="Perfil"
								src={imagemPadrao}
								className={classes.profileImage}
							/>
						)}
						<CardOptions
							id={props.id}
							setOpenModalRemove={props.setOpenModalRemove}
						/>
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
						<div>
							{props.cargo !== null ? (
								<img
									src={`http://alterdata-5-back-end.herokuapp.com/api/cargos/avatar/${props.cargo.idCargo}`}
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
							) : (
								<img
									src={ImagemPadraoCargo}
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
							)}
						</div>

						<Typography className={classes.userRoleText}>
							{props.role}
						</Typography>

						<Grid item xs={4} className={classes.edit}>
							<Typography
								onClick={() => {
									props.setOpenModalCargo(true);
									context.setUsuarioAtual(props.id);
								}}
								className={classes.icon}
							>
								<EditIcon fontSize="small" />
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
		display: "flex",
		flexDirection: "row",
		marginLeft: 18,
		verticalAlign: "center",
	},
	userRoleText: {
		marginTop: 3,
		fontSize: 18,
		color: "#ffffff",
		marginLeft: 5,
		textAlign: "left",
		verticalAlign: "center",
		minWidth: 143,
	},
	cardTop: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
		columnGap: 30,
	},
	edit: {
		marginTop: 7,
	},
});

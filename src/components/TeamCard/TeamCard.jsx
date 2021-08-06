import React from "react";

//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import apiUsuario from "../../services/api.usuarios";

import imagemPadraoEquipe from "../../assets/teampic.png";

function TeamCard(props) {
	const idUsuario = localStorage.getItem("@user-id");
	React.useEffect(() => {
		if (props.avatarName !== "") {
			setAvatar(props.avatarName);
		}
	}, []);

	const [avatar, setAvatar] = React.useState(false);
	console.log(props.id);

	const handleClick = () => {
		apiUsuario
			.editarTime(idUsuario, props.id)
			.then((res) => window.location.reload());
	};
	const classes = useStyles();

	return (
		<div>
			<Card elevation={7} className={classes.card} color="default">
				<CardContent className={classes.cardContent}>
					<div className={classes.cardTop}>
						{avatar ? (
							<img
								src={`http://alterdata-5-back-end.herokuapp.com/api/equipes/avatar/${props.id}`}
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
								src={imagemPadraoEquipe}
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

						<Typography className={classes.teamName}>{props.name}</Typography>
					</div>
					<CardContent style={{ textAlign: "center" }}>
						<Button onClick={handleClick} variant="contained" color="primary">
							Entrar
						</Button>
					</CardContent>
				</CardContent>
			</Card>
		</div>
	);
}
export default TeamCard;

const useStyles = makeStyles({
	card: {
		borderRadius: 20,
		width: 300,
		height: 150,
		marginRight: 20,
		marginLeft: 20,
		marginTop: 20,
		marginBottom: 20,
		alignItems: "center",
		justofyContent: "center",
	},
	teamName: {
		fontSize: 25,
		textAlign: "left",
	},
	profileImage: {
		height: 100,
		width: 100,
		marginLeft: 85,
	},
	cardContent: {
		alignItems: "center",
		justofyContent: "center",
	},
	cardTop: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
		columnGap: 30,
	},
});

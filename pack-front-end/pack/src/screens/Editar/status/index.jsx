import React from "react";
import { useParams, useHistory } from "react-router";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import api from "../../../services/api.usuarios";

function EditarStatus() {
	const { id } = useParams();

	const [status, setStatus] = React.useState("");

	const history = useHistory();
	const home = () => {
		history.push("/");
		history.go(0)

	}


	const handleChange = () => {
		const novo = {
			status,
		};

		api.editarStatus(id, novo).then((res) => {
			console.log(res);
		});
	};

	const classes = useStyles();

	return (
		<div className={classes.container}>
			<TextField
				id="filled-required"
				label="Status (MAX: 25)"
				defaultValue=""
				variant="filled"
				onChange={(e) => setStatus(e.target.value)}
				value={status}
				inputProps={{ maxLength: 25 }}
			/>
			<div className={classes.buttons}>
				<Button onClick={handleChange} variant="contained" className={classes.blueButton}>
						Salvar
				</Button>
				<Button variant="contained"  onClick={home} className={classes.grayButton}>
						Cancelar
				</Button>
			</div>
		</div>
	);
}

const useStyles = makeStyles({
	buttons:{
		display: "flex",
		justifyContent: "center",
	},
    blueButton:{
		backgroundColor: "#0083C1",
		color: "#ffffff",
		margin: 5,
		'&:hover': {
			backgroundColor: "#7BBBDB",
			color: "#000000",
		}
	},
	grayButton:{
		backgroundColor: "#F5F3F4",
		color: "#000000",
		margin: 5
	},
	container: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		margin: "auto",
		flexDirection: "column",
		maxWidth: 300
	}
  })


export default EditarStatus;

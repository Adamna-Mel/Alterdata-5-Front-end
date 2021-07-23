import React from "react";
import { useParams, useHistory } from "react-router";

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import api from "../../../services/api.usuarios";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function EditarStatus() {
	const { id } = useParams();

	const [status, setStatus] = React.useState("");

	const history = useHistory();
	const home = () => {
		history.push("/");
		history.go(0)

	}

	//Snackbar/Alert
	//AlertSucess

	const [openAlert, setOpenAlert] = React.useState(false);
	const handleClickAlert = () => {
		setOpenAlert(true);
	  };
	  

	const handleCloseAlert = (event, reason) => {
		if (reason === 'clickaway') {
		return;
		}

		setOpenAlert(false);
	};

	const handleChange = () => {
		const novo = {
			status,
		};
		setOpenAlert(true);

		api.editarStatus(id, novo).then((res) => {
			console.log(res);
		});
	};

	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
					<Alert onClose={handleCloseAlert} severity="success">
					Status atualizado com sucesso!!
					</Alert>
				</Snackbar>
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

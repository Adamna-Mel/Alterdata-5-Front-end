import React from "react";
import { useParams, useHistory } from "react-router-dom";

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert'

import api from "../../services/api.usuarios";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function DeletarUsuario(props) {
	const { id } = useParams();

	const [usuario, setUsuario] = React.useState({});

	const history = useHistory();

	const home = () => {
		history.push("/");
		props.chamarAPI()
	}

	React.useEffect(() => {
		api.obterUsuariosPorId(id).then((res) => {
			const novo = res;
			setUsuario(novo);
		});
	}, []);

	const handleClick = () => {
		api.apagarUsuario(id).then((res) => {
			setOpenAlert(true);
			console.log(res);
			home()
		});
	
	};

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

	//

	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Card className={classes.card}>
			<Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
				<Alert onClose={handleCloseAlert} severity="success">
					Usuário deletado com sucesso!!
				</Alert>
			</Snackbar>
			<h1 className={classes.centralize}>Apagar o usuario {usuario.nome}?</h1>
				<div className={classes.centralize}>
					<Button onClick={handleClick} variant="contained" className={classes.redButton}>Apagar</Button>			
					<Button onClick={home} variant="contained" color="secondary" className={classes.button}>Voltar</Button>
				</div>
				</Card>
		</div>
	);
}

const useStyles = makeStyles({
	centralize:{
		display: "flex",
		justifyContent: "center",
		textAlign: "center"
	},
    redButton:{
		backgroundColor: "#a11a10",
		color: "#ffffff",
		margin: 5,
		'&:hover': {
			backgroundColor: "#5e0f08",
			color: "#000000",
		}
	},
	button: {
		margin: 5
	},
	container: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		margin: "auto",
		flexDirection: "column",
		maxWidth: 300
	},
	card: {
		justifyContent: "center",
		borderRadius: 20,
        maxWidth: 500,
        height: "auto",
        marginRight: 10,
        marginLeft: 10,
		padding: 10,
		margin: "50%",
		textAlign: "center"
	}
  })

export default DeletarUsuario;

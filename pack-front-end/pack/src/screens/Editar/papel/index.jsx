import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import apiUsuarios from "../../../services/api.usuarios";
import apiPapeis from "../../../services/api.papeis";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

function EditarPapel() {
	const { id } = useParams();

	const [papeis, setPapeis] = React.useState([]);
	const [nome, setNome] = React.useState("");

	React.useEffect(() => {
		apiPapeis.obterPepeis().then((res) => {
			console.log(res);
			setPapeis(res);
		});
	}, []);

	const history = useHistory();
	const home = () => {
		history.push("/");
		history.go(0)

	}

	const handleClick = () => {
		if (nome.length != 0) {
			const novo = {
				nome,
			};
			apiPapeis.adicionarPapel(novo).then((res) => {
				console.log(res);
				apiUsuarios.editarPapel(id, res.data.idCargo);
			});
		}
	};

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick2 = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const classes = useStyles();

	return (
		<div className={classes.container}>
			{" "}

			<TextField
					id="filled-required"
					label="Criar Cargo (MAX. 12)"
					defaultValue=""
					variant="filled"
					onChange={(e) => setNome(e.target.value)}
					value={nome}
					type="text"
					inputProps={{ maxLength: 12 }}
				/>
			<div className={classes.buttons}>
				<Button onClick={handleClick} variant="contained" className={classes.blueButton}>
						Criar e Adicionar esse cargo ao usuário
				</Button>
				<Button
					variant="contained"
					aria-controls="simple-menu"
					aria-haspopup="true"
					onClick={handleClick2}
					className={classes.blueButton}
				>
					Escolher cargo já existente
				</Button>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					{papeis.map((p) => (
						<MenuItem
							key={p.idCargo}
							onClick={() => {
								handleClose;
								apiUsuarios.editarPapel(id, p.idCargo);
							}}
						>
							{p.nome}
						</MenuItem>
					))}
				</Menu>
				<Button variant="contained"  onClick={home} className={classes.grayButton}>
							Voltar
				</Button>
			</div>
		</div>
	);
}

const useStyles = makeStyles({
	buttons:{
		display: "flex",
		justifyContent: "center",
		flexDirection: "column"
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

export default EditarPapel;

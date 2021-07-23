import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

import './Rotas.css'

import Time from "../screens/times/index";
import Nav from "../components/Nav";
import Apagar from "../screens/apagarUsuario/index";
import Adicionar from "../screens/adicionarUsuario";
import Atualizar from "../screens/atualizarUsuario/index";
import EditarPapel from "../screens/Editar/papel/index";
import EditarTime from "../screens/Editar/time/index";
import EditarStatus from "../screens/Editar/status/index";

function Rotas(props) {
	const classes = useStyles();
	return (
		<Router>
			<Link to="/adicionar" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
				<Button variant="contained" className={classes.blueButton}>
					Adicionar usuário
				</Button>
			</Link>

			<Switch>
				<Route path={"/editar-status/:id"}>
					<EditarStatus />
				</Route>

				<Route path={"/editar-time/:id"}>
					<EditarTime />
				</Route>

				<Route path={"/editar-papel/:id"}>
					<EditarPapel />
				</Route>

				<Route path={"/atualizar/:id"}>
					<Atualizar />
				</Route>

				<Route path={"/adicionar"}>
					<Adicionar />
				</Route>

				<Route path={"/apagar/:id"}>
					<Apagar />
				</Route>

				<Route path={"/"}>
					<Time usuarios={props.usuarios} />
				</Route>
			</Switch>
		</Router>
	);
}

const useStyles = makeStyles({
    blueButton:{
		backgroundColor: "#0083C1",
		color: "#ffffff",
		margin: 5,
		'&:hover': {
			backgroundColor: "#7BBBDB",
			color: "#000000",
		}
	},
  })

export default Rotas;

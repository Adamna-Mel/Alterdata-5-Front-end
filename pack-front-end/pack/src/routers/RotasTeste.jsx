import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

import Nav from "../components/Nav"
import Login from '../components/login/Login'

import './Rotas.css'



function Rotas(props) {
	return (
		<Router>
			<Switch>
				<Route path={"/"}>
					<Nav />
				</Route>

				<Route path={"/login"}>
					<Login />
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

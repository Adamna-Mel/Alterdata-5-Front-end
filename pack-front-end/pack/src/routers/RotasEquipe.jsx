import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Equipes from "../equipes/TodosEquipes/index";
import EditarEquipe from "../equipes/editarEquipe/index";
import CriarEquipe from "../equipes/criar/index";
import ApagarEquipe from "../equipes/apagar/index";

function Rotas() {
	return (
		<Router>
			<Link to={"criar"}>
				<button>Criar Equipe</button>
			</Link>

			<Switch>
				<Route path={"/apagar/:id"}>
					<ApagarEquipe />
				</Route>

				<Route path={"/criar"}>
					<CriarEquipe />
				</Route>

				<Route path={"/editar/:id"}>
					<EditarEquipe />
				</Route>

				<Route path={"/"}>
					<Equipes />
				</Route>
			</Switch>
		</Router>
	);
}

export default Rotas;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Equipe from "../screens/equipes/index";
import Nav from "../components/Nav";
import Apagar from "../screens/apagarUsuario/index";
import Adicionar from "../screens/adicionarUsuario";
import Atualizar from "../screens/atualizarUsuario/index";
import EditarCargo from "../screens/Editar/cargo/index";
import EditarEquipe from "../screens/Editar/equipe/index";
import EditarStatus from "../screens/Editar/status/index";

function Rotas(props) {
	return (
		<Router>
			<Link to="/adicionar">
				<button>Novo usuario</button>
			</Link>

			<Switch>
				<Route path={"/editar-status/:id"}>
					<EditarStatus />
				</Route>

				<Route path={"/editar-equipe/:id"}>
					<EditarEquipe />
				</Route>

				<Route path={"/editar-cargo/:id"}>
					<EditarCargo />
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
					<Equipe usuarios={props.usuarios} />
				</Route>
			</Switch>
		</Router>
	);
}

export default Rotas;

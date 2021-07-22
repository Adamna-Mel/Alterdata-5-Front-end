import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Time from "../screens/times/index";
import Nav from "../components/Nav";
import Apagar from "../screens/apagarUsuario/index";
import Adicionar from "../screens/adicionarUsuario";
import Atualizar from "../screens/atualizarUsuario/index";
import EditarPapel from "../screens/Editar/papel/index";
import EditarTime from "../screens/Editar/time/index";
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

export default Rotas;

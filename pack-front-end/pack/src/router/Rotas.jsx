import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Time from "../crudUsuario/Time/index";
import Adicionar from "../crudUsuario/adicionarUsuario/index";
import Atualizar from "../crudUsuario/atualizarStatus/index";
import Deletar from "../crudUsuario/deletarUsuario/index";

function Rotas() {
	return (
		<Router>
			<Switch>
				<Route path={"/apagar/:id"}>
					<Deletar />
				</Route>

				<Route path={"/atualizar/:id"}>
					<Atualizar />
				</Route>

				<Route path={"/adicionar"}>
					<Adicionar />
				</Route>

				<Route path={"/"}>
					<Time />
				</Route>
			</Switch>
		</Router>
	);
}

export default Rotas;

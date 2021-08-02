import React, { createContext, useEffect, useState } from "react";

import apiUsuarios from "../services/api.usuarios";
import apiEquipes from "../services/api.equipes";

export const UserContext = createContext();

function UserProvider({ children }) {
	const [listaDeUsuarios, setListaDeUsuarios] = useState([]);
	const [login, setLogin] = useState("");

	const idUsuario = localStorage.getItem("@user-id");

	useEffect(() => {
		login.length !== 0
			? apiUsuarios.obterUsuarioPorId(idUsuario).then((res) => {
					apiEquipes
						.obterUsuariosPorLogin(res.equipe.idEquipe, login)
						.then((res) => {
							res.data.length !== undefined
								? setListaDeUsuarios(res.data)
								: setListaDeUsuarios([]);
							console.log(res);
						});
			  })
			: apiUsuarios.obterUsuarioPorId(idUsuario).then((res) => {
					apiEquipes.obterEquipesPorId(res.equipe.idEquipe).then((res) => {
						setListaDeUsuarios(res.membros);
					});
			  });
	}, [login]);

	return (
		<UserContext.Provider
			value={{ listaDeUsuarios, setListaDeUsuarios, login, setLogin }}
		>
			{children}
		</UserContext.Provider>
	);
}

export default UserProvider;

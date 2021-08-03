import React, { createContext, useEffect, useState } from "react";

import apiUsuarios from "../services/api.usuarios";
import apiEquipes from "../services/api.equipes";

export const UserContext = createContext();

//TODO: alterar as nomenclaturas
function UserProvider({ children }) {
	const [listaDeUsuarios, setListaDeUsuarios] = useState([]);
	const [listaDeEquipes, setListaDeEquipes] = useState([]);
	const [login, setLogin] = useState("");

	const idUsuario = localStorage.getItem("@user-id");

	useEffect(() => {
		apiUsuarios.obterUsuarioPorId(idUsuario).then((res) => {
			if (login.length !== 0) {
				if (res.equipe !== null) {
					apiEquipes
						.obterUsuariosPorLogin(res.equipe.idEquipe, login)
						.then((res) => {
							res.data.length !== undefined
								? setListaDeUsuarios(res.data)
								: setListaDeUsuarios([]);
							console.log(listaDeUsuarios);
						});
				} else {
					apiEquipes.obterEquipesPorNome(login).then((res) => {
						res.length !== undefined
							? setListaDeEquipes(res)
							: setListaDeEquipes([]);
					});
				}
			} else {
				if (res.equipe !== null) {
					apiEquipes.obterEquipesPorId(res.equipe.idEquipe).then((res) => {
						setListaDeUsuarios(res.membros);
						console.log(listaDeUsuarios);
					});
				} else {
					apiEquipes
						.obterEquipes()
						.then((res) =>
							res !== undefined ? setListaDeEquipes(res) : setListaDeEquipes([])
						);
				}
			}
		});
	}, [login]);

	return (
		<UserContext.Provider
			value={{
				listaDeUsuarios,
				setListaDeUsuarios,
				login,
				setLogin,
				listaDeEquipes,
				setListaDeEquipes,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export default UserProvider;

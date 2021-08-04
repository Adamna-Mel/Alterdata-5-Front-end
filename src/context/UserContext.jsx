import React, { createContext, useEffect, useState } from "react";

import apiUsuarios from "../services/api.usuarios";
import apiEquipes from "../services/api.equipes";

export const UserContext = createContext();

//TODO: alterar as nomenclaturas
function UserProvider({ children }) {
	const [listaDeUsuarios, setListaDeUsuarios] = useState([]);
	const [listaDeEquipes, setListaDeEquipes] = useState([]);
	const [resposta, setResposta] = useState();
	const [login, setLogin] = useState("");
	const [usuarioAtual, setUsuarioAtual] = useState();
	const [page, setPage] = useState(0);
	const [size, setSize] = useState(10);

	const idUsuario = localStorage.getItem("@user-id");

	const api = () => {
		apiUsuarios.obterUsuarioPorId(idUsuario).then((res) => {
			setResposta(res);
			if (login.length !== 0) {
				if (res.equipe !== null) {
					apiEquipes
						.obterUsuariosPorLogin(res.equipe.idEquipe, login, size, page)
						.then((res) => {
							res.data.length !== undefined
								? setListaDeUsuarios(res.data)
								: setListaDeUsuarios([]);
						});
				} else {
					apiEquipes.obterEquipesPorNome(login, size, page).then((res) => {
						res.length !== undefined
							? setListaDeEquipes(res)
							: setListaDeEquipes([]);
					});
				}
			} else {
				if (res.equipe !== null) {
					apiEquipes.obterEquipesPorId(res.equipe.idEquipe).then((res) => {
						setListaDeUsuarios(res.membros);
					});
				} else {
					apiEquipes
						.obterEquipes(size, page)
						.then((res) =>
							res !== undefined ? setListaDeEquipes(res) : setListaDeEquipes([])
						);
				}
			}
		});
	};

	useEffect(() => {
		api();
	}, [login, page]);

	return (
		<UserContext.Provider
			value={{
				listaDeUsuarios,
				setListaDeUsuarios,
				login,
				setLogin,
				listaDeEquipes,
				setListaDeEquipes,
				usuarioAtual,
				setUsuarioAtual,
				page,
				setPage,
				size,
				setSize,
				api,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export default UserProvider;

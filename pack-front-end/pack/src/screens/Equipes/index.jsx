import React from "react";

import Card from "../../components/UserCard";
import "./style.css";

function Equipe(props) {
	return (
		<div className="container">
			{props.usuarios != undefined ? (
				props.usuarios.map((usuario) => (
					<Card
						key={usuario.id}
						id={usuario.id}
						name={usuario.nome}
						status={usuario.status}
						role={usuario.cargo.nome}
					/>
				))
			) : (
				<h1>Equipe Vazio</h1>
			)}
		</div>
	);
}
export default Equipe;

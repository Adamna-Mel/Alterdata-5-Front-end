import React from "react";

import Card from "../../components/UserCard";
import "./style.css";

function Time(props) {
	return (
		<div className="container">
			{props.usuarios != undefined ? (
				props.usuarios.map((usuario) => (
					<Card
						key={usuario.id}
						id={usuario.id}
						name={usuario.nome}
						status={usuario.status}
						role={usuario.cargo}
					/>
				))
			) : (
				<h1>Time Vazio</h1>
			)}
		</div>
	);
}
export default Time;

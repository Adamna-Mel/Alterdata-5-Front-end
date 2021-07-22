import React from "react";
import { Link } from "react-router-dom";

import Card from "../../components/UserCard";

import api from "../../services/api.usuarios";

function Time(props) {
	return (
		<>
			{props.usuarios != undefined ? (
				props.usuarios.map((u) => (
					<Card
						key={u.id}
						id={u.id}
						name={u.nome}
						status={u.status}
						role={u.papel}
					/>
				))
			) : (
				<h1>Time Vazio</h1>
			)}
		</>
	);
}
export default Time;

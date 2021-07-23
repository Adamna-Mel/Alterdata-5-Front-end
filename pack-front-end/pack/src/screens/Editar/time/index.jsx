import React from "react";
import { Link, useParams } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import apiUsuario from "../../../services/api.usuarios";
import apiTime from "../../../services/api.times";
import api from "../../../services/api";

function EditarTime() {
	const { id } = useParams();

	const [nome, setNome] = React.useState("");

	const [times, setTimes] = React.useState([]);

	React.useEffect(() => {
		apiTime.obterequipes().then((res) => {
			setTimes(res);
			console.log(times);
		});
	}, []);

	const handleClick = () => {
		if (nome.length != 0) {
			const novo = {
				nome,
			};
			apiTime.adicionarTime(novo).then((res) => {
				console.log(res);
				apiUsuario.editarTime(id, res.data.id);
			});
		}
	};

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick2 = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<input
				type="text"
				placeholder="Criar Time"
				value={nome}
				onChange={(e) => setNome(e.target.value)}
			/>
			<button onClick={handleClick}>
				Criar e Adicionar esse usuario ao time
			</button>

			<Button
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick2}
			>
				Escolher time já existente
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{times.map((t) => (
					<MenuItem
						key={t.id}
						onClick={() => {
							handleClose;
							apiUsuario.editarTime(id, t.id);
						}}
					>
						{t.nome}
					</MenuItem>
				))}
			</Menu>
		</>
	);
}

export default EditarTime;

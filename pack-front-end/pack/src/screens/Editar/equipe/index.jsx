import React from "react";
import { Link, useParams } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import apiUsuario from "../../../services/api.usuarios";
import apiEquipe from "../../../services/api.equipes";
import api from "../../../services/api";

function EditarEquipe() {
	const { id } = useParams();

	const [nome, setNome] = React.useState("");

	const [equipes, setEquipes] = React.useState([]);

	React.useEffect(() => {
		apiEquipe.obterequipes().then((res) => {
			setEquipes(res);
			console.log(equipes);
		});
	}, []);

	const handleClick = () => {
		if (nome.length != 0) {
			const novo = {
				nome,
			};
			apiEquipe.adicionarEquipe(novo).then((res) => {
				console.log(res);
				apiUsuario.editarEquipe(id, res.data.id);
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
				placeholder="Criar Equipe"
				value={nome}
				onChange={(e) => setNome(e.target.value)}
			/>
			<button onClick={handleClick}>
				Criar e Adicionar esse usuario ao equipe
			</button>

			<Button
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick2}
			>
				Escolher equipe já existente
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{equipes.map((t) => (
					<MenuItem
						key={t.id}
						onClick={() => {
							handleClose;
							apiUsuario.editarEquipe(id, t.id);
						}}
					>
						{t.nome}
					</MenuItem>
				))}
			</Menu>
		</>
	);
}

export default EditarEquipe;

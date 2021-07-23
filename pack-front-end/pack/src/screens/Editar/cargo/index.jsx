import React from "react";
import { Link, useParams } from "react-router-dom";

import apiUsuarios from "../../../services/api.usuarios";
import apiPapeis from "../../../services/api.cargos";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function EditarCargo() {
	const { id } = useParams();

	const [papeis, setPapeis] = React.useState([]);
	const [nome, setNome] = React.useState("");

	React.useEffect(() => {
		apiPapeis.obterPepeis().then((res) => {
			console.log(res);
			setPapeis(res);
		});
	}, []);

	const handleClick = () => {
		if (nome.length != 0) {
			const novo = {
				nome,
			};
			apiPapeis.adicionarCargo(novo).then((res) => {
				console.log(res);
				apiUsuarios.editarCargo(id, res.data.idCargo);
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
			{" "}
			<input
				type="text"
				placeholder="Criar Cargo"
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
				{papeis.map((p) => (
					<MenuItem
						key={p.idCargo}
						onClick={() => {
							handleClose;
							apiUsuarios.editarCargo(id, p.idCargo);
						}}
					>
						{p.nome}
					</MenuItem>
				))}
			</Menu>
		</>
	);
}

export default EditarCargo;
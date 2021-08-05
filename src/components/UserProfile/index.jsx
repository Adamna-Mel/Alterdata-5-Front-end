import React, { useState, useEffect } from "react";
import {
	Grid,
	Paper,
	TextField,
	Button,
	Typography,
	ClickAwayListener,
	Input,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import useWindowDimensions from "../../hooks/WindowDimension";

import apiUsuarios from "../../services/api.usuarios";

function UserProfile() {
	const [userId, setUserId] = useState();
	const [nome, setNome] = useState();
	const [email, setEmail] = useState();
	const [login, setLogin] = useState();
	const [status, setStatus] = useState();
	const [cargo, setCargo] = useState();
	const [imagem, setImagem] = useState(null);
	const [caminho, setCaminho] = useState(null);

	const [newNome, setNewNome] = useState();
	const [newEmail, setNewEmail] = useState();
	const [newLogin, setNewLogin] = useState();
	const [newStatus, setNewStatus] = useState();
	const [newCargo, setNewCargo] = useState();

	const [condicaoNome, setCondicaoNome] = useState();
	const [condicaoEmail, setCondicaoEmail] = useState();
	const [condicaoLogin, setCondicaoLogin] = useState();
	const [condicaoStatus, setCondicaoStatus] = useState();
	const [condicaoCargo, setCondicaoCargo] = useState();

	const idUsuario = localStorage.getItem("@user-id");

	const papercss = {
		padding: "25px 20px",
		width: 400,
		margin: "30px auto",
		borderRadius: 20,
	};

	React.useEffect(() => {
		apiUsuarios.obterUsuarioPorId(idUsuario).then((res) => {
			setUserId(res.id);
			setNome(res.nome);
			setEmail(res.email);
			setLogin(res.login);
			res.status ? setStatus("...") : setStatus(res.status);
			res.cargo !== null ? setCargo(res.cargo.nome) : setCargo("Sem Cargo.");
		});
	}, []);

	const { height, width } = useWindowDimensions();

	const handleClickAway = () => {
		setCondicaoNome(false);
		setCondicaoEmail(false);
		setCondicaoLogin(false);
		setCondicaoStatus(false);
		setCondicaoCargo(false);
	};

	const handleFile = (e) => {
		setImagem(e.target.files[0]);
		setCaminho(URL.createObjectURL(e.target.files[0]));
	};

	const handleSave = () => {
		const formData = new FormData();

		if (imagem !== null) {
			formData.append("img", imagem);
			console.log(idUsuario);

			apiUsuarios
				.alterarAvatar(idUsuario, formData)
				.then((res) => console.log(res));
		}
	};

	return (
		<div style={{ height: height, marginTop: 130 }}>
			<Grid>
				<Paper elevation={7} style={papercss}>
					<Grid align="center">
						{imagem === null ? (
							<Avatar
								alt="Perfil"
								src={`http://alterdata-5-back-end.herokuapp.com/api/usuarios/avatar/${userId}`}
								style={{
									width: 200,
									height: 200,
									borderRadius: 400 / 2,
									borderStyle: "solid",
									borderColor: "#1A2228",
									marginTop: -130,
								}}
							/>
						) : (
							<Avatar
								alt="Perfil"
								src={caminho}
								style={{
									width: 200,
									height: 200,
									borderRadius: 400 / 2,
									borderStyle: "solid",
									borderColor: "#1A2228",
									marginTop: -130,
								}}
							/>
						)}

						<Input type="file" onChange={handleFile} />
						<ClickAwayListener
							mouseEvent="onMouseDown"
							touchEvent="onTouchStart"
							onClickAway={handleClickAway}
						>
							{condicaoNome ? (
								<TextField
									id="filled-required"
									label="Status - Double Click"
									defaultValue=""
									//   onKeyDown={handleKeyDown}
									onChange={(e) => setNewNome(e.target.value)}
									value={newNome}
									type="text"
									size="small"
									multiline
									rows={1}
									inputProps={{ maxLength: 140 }}
									style={{ marginBottom: 10 }}
								/>
							) : (
								<Typography
									style={{ fontSize: 33 }}
									onClick={() => setCondicaoNome(true)}
								>
									{nome}
								</Typography>
							)}
						</ClickAwayListener>
					</Grid>
					<Typography color="primary" style={{ fontSize: 17 }}>
						email
					</Typography>{" "}
					<ClickAwayListener
						mouseEvent="onMouseDown"
						touchEvent="onTouchStart"
						onClickAway={handleClickAway}
					>
						{condicaoEmail ? (
							<TextField
								id="filled-required"
								label="Status - Double Click"
								defaultValue=""
								//   onKeyDown={handleKeyDown}
								onChange={(e) => setNewEmail(e.target.value)}
								value={newEmail}
								type="text"
								size="small"
								multiline
								rows={1}
								inputProps={{ maxLength: 140 }}
								style={{ marginBottom: 10 }}
							/>
						) : (
							<Typography
								style={{ fontSize: 21 }}
								onClick={() => setCondicaoEmail(true)}
							>
								{email}
							</Typography>
						)}
					</ClickAwayListener>
					<Typography color="primary" style={{ fontSize: 17 }}>
						login
					</Typography>
					<ClickAwayListener
						mouseEvent="onMouseDown"
						touchEvent="onTouchStart"
						onClickAway={handleClickAway}
					>
						{condicaoLogin ? (
							<TextField
								id="filled-required"
								label="Status - Double Click"
								defaultValue=""
								//   onKeyDown={handleKeyDown}
								onChange={(e) => setNewLogin(e.target.value)}
								value={newLogin}
								type="text"
								size="small"
								multiline
								rows={1}
								inputProps={{ maxLength: 140 }}
								style={{ marginBottom: 10 }}
							/>
						) : (
							<Typography
								style={{ fontSize: 21 }}
								onClick={() => setCondicaoLogin(true)}
							>
								{login}
							</Typography>
						)}
					</ClickAwayListener>
					<Typography color="primary" style={{ fontSize: 17 }}>
						status
					</Typography>
					<ClickAwayListener
						mouseEvent="onMouseDown"
						touchEvent="onTouchStart"
						onClickAway={handleClickAway}
					>
						{condicaoStatus ? (
							<TextField
								id="filled-required"
								label="Status - Double Click"
								defaultValue=""
								//   onKeyDown={handleKeyDown}
								onChange={(e) => setNewStatus(e.target.value)}
								value={newStatus}
								type="text"
								size="small"
								multiline
								rows={1}
								inputProps={{ maxLength: 140 }}
								style={{ marginBottom: 10 }}
							/>
						) : (
							<Typography
								style={{ fontSize: 21 }}
								onClick={() => setCondicaoStatus(true)}
							>
								{status}
							</Typography>
						)}
					</ClickAwayListener>
					<Typography color="primary" style={{ fontSize: 17 }}>
						cargo
					</Typography>
					<ClickAwayListener
						mouseEvent="onMouseDown"
						touchEvent="onTouchStart"
						onClickAway={handleClickAway}
					>
						{condicaoCargo ? (
							<TextField
								id="filled-required"
								label="Status - Double Click"
								defaultValue=""
								//   onKeyDown={handleKeyDown}
								onChange={(e) => setNewCargo(e.target.value)}
								value={newCargo}
								type="text"
								size="small"
								multiline
								rows={1}
								inputProps={{ maxLength: 140 }}
								style={{ marginBottom: 10 }}
							/>
						) : (
							<Typography
								style={{ fontSize: 21 }}
								onClick={() => setCondicaoCargo(true)}
							>
								{cargo}
							</Typography>
						)}
					</ClickAwayListener>
					<div
						style={{
							marginTop: 10,
							justifyContent: "center",
							display: "flex",
						}}
					>
						<Button color="primary" variant="contained" onClick={handleSave}>
							Salvar Perfil
						</Button>
					</div>
				</Paper>
			</Grid>
		</div>
	);
}

export default UserProfile;

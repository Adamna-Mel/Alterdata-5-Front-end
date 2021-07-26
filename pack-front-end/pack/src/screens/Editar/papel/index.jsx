import React, { useState } from 'react'
import { Link, useParams, useHistory } from "react-router-dom";
import { SketchPicker } from 'react-color';

import SvgColor from 'react-svg-color';

import apiUsuarios from "../../../services/api.usuarios";
import apiPapeis from "../../../services/api.papeis";

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert'
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";

//#region Icones
import CrystalShine from "../../../assets/icons/crystal-shine.svg";
import BatMask from "../../../assets/icons/bat-mask.svg";
import Clockwork from "../../../assets/icons/clockwork.svg";
import Controller from "../../../assets/icons/controller.svg";
import Daggers from "../../../assets/icons/daggers.svg";
import Fireball from "../../../assets/icons/fireball.svg";
import Hades from "../../../assets/icons/hades.svg";
import MineralHeart from "../../../assets/icons/mineral-heart.svg";
import MoonBat from "../../../assets/icons/moon-bats.svg";
import Mouse from "../../../assets/icons/mouse.svg";
import NightSky from "../../../assets/icons/night-sky.svg";
import Ninja from "../../../assets/icons/ninja.svg";
import NinjaCloud from "../../../assets/icons/ninja-cloud.svg";
import Palette from "../../../assets/icons/palette.svg";
import PawHeart from "../../../assets/icons/paw-heart.svg";
import PencilBrush from "../../../assets/icons/pencil-brush.svg";
import SharkBite from "../../../assets/icons/shark-bite.svg";
import Shuriken from "../../../assets/icons/shuriken.svg";
import Sly from "../../../assets/icons/sly.svg";
import Smartphone from "../../../assets/icons/smartphone.svg";
import Cancel from "../../../assets/icons/cancel.svg";
import Database from "../../../assets/icons/database.svg";
import Luchador from '../../../assets/icons/luchador.svg'
import { Typography } from '@material-ui/core';

//#endregion

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function EditarPapel(props) {
	//#region Icones
	const [iconeTime, setIconeTime] = useState(Luchador)
	const [primaryColor, setPrimaryColor] = useState('#fff')
	const [showPrimaryColorPicker, setShowPrimaryColorPicker] = useState(false)
	const [secondaryColor, setSecondaryColor] = useState('#000')
	const [showSecondaryColorPicker, setShowSecondaryColorPicker] = useState(false)

	const listaIcones = [CrystalShine,
						 BatMask,
						 Clockwork,
						 Controller,
						 Daggers,
						 Fireball,
						 Hades,
						 MineralHeart,
						 MoonBat,
						 Mouse,
						 NightSky,
						 Ninja,
						 NinjaCloud,
						 Palette,
						 PawHeart,
						 PencilBrush,
						 SharkBite,
						 Shuriken,
						 Sly,
						 Smartphone,
						 Cancel,
						 Database,
						 Luchador]
	const [showListaIcones, setShowListaIcones] = useState(false)

	function IconeAtual() {
		return (
		  <SvgColor 
		  svg={iconeTime}
		  width={200}
		  colors={[secondaryColor, primaryColor]}
	  />
		)
	  }
	//#endregion
	
	const { id } = useParams();

	const [papeis, setPapeis] = React.useState([]);
	const [nome, setNome] = React.useState("");

	React.useEffect(() => {
		apiPapeis.obterPepeis().then((res) => {
			console.log(res);
			setPapeis(res);
		});
	}, []);

	const history = useHistory();
	const home = () => {
		history.push("/");
		props.chamarAPI();
	};

	//Snackbar/Alert
	//AlertSucess
	const [openAlert, setOpenAlert] = React.useState(false);
	const handleClickAlert = () => {
		setOpenAlert(true);
	  };
	  

	const handleCloseAlert = (event, reason) => {
		if (reason === 'clickaway') {
		return;
		}

		setOpenAlert(false);
	};	

	const handleClick = () => {
		if (nome.length != 0) {
			const novo = {
				nome,
			};
			apiPapeis.adicionarPapel(novo).then((res) => {
				console.log(res);
				apiUsuarios.editarPapel(id, res.data.idCargo);
			});
		}
		setOpenAlert(true);
	};

		//AlertInfo
		const [openAlertInfo, setOpenAlertInfo] = React.useState(false);
		const handleClickAlertInfo = () => {
			setOpenAlertInfo(true);
		  };
		  
	
		const handleCloseAlertInfo = (event, reason) => {
			if (reason === 'clickaway') {
			return;
			}
	
			setOpenAlertInfo(false);
		};	
	
		const handleClickInfo = () => {
			if (nome.length != 0) {
				const novo = {
					nome,
				};
				apiPapeis.adicionarPapel(novo).then((res) => {
					console.log(res);
					apiUsuarios.editarPapel(id, res.data.idCargo);
				});
			}
			setOpenAlertInfo(true);
		};

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick2 = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const classes = useStyles();

	return (
		<form className={classes.root}>
			<Card className={classes.card}>	
			<Snackbar open={openAlertInfo} autoHideDuration={6000} onClose={handleCloseAlertInfo}>
					<Alert onClose={handleCloseAlertInfo} severity="info">
					Cargo criado com sucesso!!
					</Alert>
			</Snackbar>
			<Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
					<Alert onClose={handleCloseAlert} severity="success">
					Cargo do cliente atualizado com sucesso!!
					</Alert>
			</Snackbar>
			<h1 style={{textAlign: "center"}}>Crie um cargo</h1>
			<TextField
					id="filled-required"
					label="Criar Cargo (MAX. 12)"
					defaultValue=""
					variant="filled"
					onChange={(e) => setNome(e.target.value)}
					value={nome}
					type="text"
					inputProps={{ maxLength: 12 }}
				/>
			<div className={classes.buttons}>
				<div className={classes.buttons}>
					<Button variant="contained" color="primary" className={classes.blueButton} onClick={() => setShowListaIcones(showListaIcones => !showListaIcones)}>
						{showListaIcones ? 'fechar lista de icones' : 'escolha o icone do seu time'}
					</Button>
					<div>
					{showListaIcones && (
					<div  className={classes.icones}>
					{listaIcones.map((icone) => (
						<div onClick={() => setIconeTime(icone)}>
						<SvgColor 
							svg={icone}
							width={40}
							colors={["#000000", "#ffffff"]}
						/>
						</div>
					))
					}
					</div>
					)}
					</div>
					<div className={classes.buttons}>
						<Button variant="contained" className={classes.blueButton} color="primary" onClick={() => setShowPrimaryColorPicker(showPrimaryColorPicker => !showPrimaryColorPicker)}>
						{showPrimaryColorPicker ? 'fechar color picker' : 'escolha a primeira cor'}
						</Button>
						{showPrimaryColorPicker && (
						<div style={{display: "flex", justifyContent: "center"}}>
						<SketchPicker
						color={primaryColor}
						onChange={updatedPrimaryColor => setPrimaryColor(updatedPrimaryColor.hex)}
						/>
						</div>
						)}
					</div>
					<div className={classes.buttons}>
						<Button variant="contained" className={classes.blueButton} color="primary" onClick={() => setShowSecondaryColorPicker(showSecondaryColorPicker => !showSecondaryColorPicker)}>
						{showSecondaryColorPicker ? 'fechar color picker' : 'escolha a segunda cor'}
						</Button>
						{showSecondaryColorPicker && (
						<div style={{display: "flex", justifyContent: "center"}}>
						<SketchPicker
						color={secondaryColor}
						onChange={updatedSecondaryColor => setSecondaryColor(updatedSecondaryColor.hex)}
						/>
						</div>
						)}
					</div>
						<div style={{margin: "auto"}}>
							<IconeAtual/>
						</div>
						<Button onClick={handleClick} variant="contained" color="primary" className={classes.button}>
						Criar e Adicionar esse cargo ao usuário
				</Button>
				
				<Button variant="contained"  onClick={home} color="secondary" className={classes.button}>
							Voltar
				</Button>
					</div>
					<h1 style={{textAlign: "center"}}>Ou escolha um cargo existente</h1>
					<Button
					color="primary"
					variant="contained"
					aria-controls="simple-menu"
					aria-haspopup="true"
					onClick={handleClick2}
					className={classes.blueButton}
				>
					Escolher cargo já existente
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
								apiUsuarios.editarPapel(id, p.idCargo);
								setOpenAlert(true);
							}}
						>
							{p.nome}
						</MenuItem>
					))}
				</Menu>
			</div>
			</Card>
		</form>
	);
}

const useStyles = makeStyles({
    button:{
		margin: 5,
	},
	root: {
		height: "auto",
		maxWidth: 600,
		'& .MuiTextField-root': {
		  margin: 5,
		  width: '25ch',
		},
	  },
	card: {
		justifyContent: "center",
		borderRadius: 20,
        maxWidth: 500,
		height: "auto",
        marginRight: 10,
        marginLeft: 10,
		padding: 10,
		margin: "10%",
		textAlign: "center"
	},
	icones: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		margin: "auto",
	},
	
  })

export default EditarPapel;



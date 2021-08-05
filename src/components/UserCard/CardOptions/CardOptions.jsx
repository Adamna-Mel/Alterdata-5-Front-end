import React, { useContext } from "react";

//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import api from "../../../services/api.usuarios";
import auth from "../../../services/auth";

import { UserContext } from "../../../context/UserContext";

const ITEM_HEIGHT = 45;

function CardOptions(props) {
	const context = useContext(UserContext);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const userLeave = () => {
		context.setUsuarioAtual(props.id);
		props.setOpenModalRemove(true);
	};

	const userDeleted = () => {
		api.apagarUsuario(props.id).then((res) => {
			if (localStorage.getItem("@user-id") == props.id) {
				auth.logout();
			}

			window.location.reload(false);
		});
	};

	const classes = useStyles();
	return (
		<div>
			<IconButton
				aria-label="more"
				aria-controls="long-menu"
				aria-haspopup="true"
				onClick={handleClick}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id="long-menu"
				anchorEl={anchorEl}
				keepMounted
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 5,
						width: "20ch",
					},
				}}
			>
				{localStorage.getItem("@user-id") != props.id ? (
					<MenuItem onClick={userLeave}> Retirar da equipe </MenuItem>
				) : null}
				<MenuItem onClick={userDeleted}> Excluir usuário </MenuItem>
			</Menu>
		</div>
	);
}

const useStyles = makeStyles({
	delete: {
		color: "red",
	},
	link: {
		textDecoration: "none",
		color: "inherit",
	},
});

export default CardOptions;

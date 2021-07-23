import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const ITEM_HEIGHT = 45;

const useStyles = makeStyles({
	delete: {
		color: "red",
	},
});

function CardOptions(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
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
				<MenuItem onClick={handleClose}>
					<Link to={`atualizar/${props.id}`}>Editar Usuário</Link>
				</MenuItem>
				<MenuItem>
					<Link to={`editar-status/${props.id}`}>Editar Status</Link>
				</MenuItem>
				<MenuItem>
					<Link to={`editar-cargo/${props.id}`}>Editar Cargo</Link>
				</MenuItem>
				<MenuItem>
					<Link to={`editar-equipe/${props.id}`}>Mudar Equipe</Link>
				</MenuItem>
				<MenuItem>Remover Usuário</MenuItem>
				<MenuItem>
					<Link to={`apagar/${props.id}`}>
						<span className={classes.delete}>Deletar Usuário</span>
					</Link>
				</MenuItem>
			</Menu>
		</div>
	);
}

export default CardOptions;

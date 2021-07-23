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
	link: {
		textDecoration: "none",
		color: "#000000"
	}
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
					<Link to={`atualizar/${props.id}`} style={{ textDecoration: 'none', color: '#000000' }}>Editar Usuário</Link>
				</MenuItem>
				<MenuItem>
					<Link to={`editar-status/${props.id}`} style={{ textDecoration: 'none', color: '#000000' }}>Editar Status</Link>
				</MenuItem>
				<MenuItem>
					<Link to={`editar-papel/${props.id}`} style={{ textDecoration: 'none', color: '#000000' }}>Editar Cargo</Link>
				</MenuItem>
				<MenuItem>
					<Link to={`editar-time/${props.id}`} style={{ textDecoration: 'none', color: '#000000' }}>Mudar Time</Link>
				</MenuItem>
				{/* <MenuItem>Remover Usuário</MenuItem> */}
				<MenuItem>
					<Link to={`apagar/${props.id}`} style={{ textDecoration: 'none', color: '#000000' }}>
						<span className={classes.delete}>Deletar Usuário</span>
					</Link>
				</MenuItem>
			</Menu>
		</div>
	);
}

export default CardOptions;

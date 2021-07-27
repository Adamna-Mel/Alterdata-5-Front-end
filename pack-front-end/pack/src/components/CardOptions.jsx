import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Typography } from "@material-ui/core";

const ITEM_HEIGHT = 45;

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
          <Link to={`/atualizar/${props.id}`} className={classes.link}>
            Editar Usuário
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={`/editar-status/${props.id}`} className={classes.link}>
            Editar Status
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={`/editar-papel/${props.id}`} className={classes.link}>
            Editar Cargo
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={`/editar-time/${props.id}`} className={classes.link}>
            Mudar Time
          </Link>
        </MenuItem>
        {/* <MenuItem>Remover Usuário</MenuItem> */}
        <MenuItem>
          <Link to={`/apagar/${props.id}`} className={classes.link}>
            <span className={classes.delete}>Deletar Usuário</span>
          </Link>
        </MenuItem>
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

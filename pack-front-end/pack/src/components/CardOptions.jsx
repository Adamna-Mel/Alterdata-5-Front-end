import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

  const ITEM_HEIGHT = 45;

  const useStyles = makeStyles({
    delete: {
      color: "red"
    }
  })

function CardOptions(){
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
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          Editar Nome
        </MenuItem>
        <MenuItem>
        Editar Status
        </MenuItem>
        <MenuItem>
          Editar Papel
        </MenuItem>
        <MenuItem>
          Mudar Time
        </MenuItem>
        <MenuItem>
          Remover Usuário
        </MenuItem>
        <MenuItem>
          <span className={classes.delete}>Deletar Usuário</span>
        </MenuItem>

      </Menu>
        </div>
    )
}

export default CardOptions;
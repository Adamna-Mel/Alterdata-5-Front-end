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

function TeamOptions(){
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
            width: '22ch',
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          Editar Nome do Time
        </MenuItem>
        <MenuItem>
          Editar Icone do Time
        </MenuItem>
        <MenuItem>
          <span className={classes.delete}>Excluir Time</span>
        </MenuItem>
    </Menu>
        </div>
    )
}

export default TeamOptions;
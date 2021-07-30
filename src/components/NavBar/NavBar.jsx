import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

//SVGColor
import SvgColor from "react-svg-color";

//ASSETS
import LogoAlterdata from "../../assets/alterdata.svg";

//SERVICES
import auth from "../../services/auth";

//TODO: switch Dark Mode no modo Mobile duplicado, necessario remover
function NavBar({ check, change }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const history = useHistory();

  const [menu, setMenu] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  React.useEffect(() => {
    auth.isAuthenticated() ? setMenu(true) : setMenu(false);
  }, []);

  const handleLogout = () => {
    auth.logout();
    window.location.reload(false);
  };

  const handleProfile = () => {
    history.push("/perfil");
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleProfile}>Usuário</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );
  //MENU
  const ITEM_HEIGHT = 45;

  const [anchorElDrawer, setAnchorElDrawer] = React.useState(null);
  const open = Boolean(anchorElDrawer);

  const handleDrawerClick = (event) => {
    setAnchorElDrawer(event.currentTarget);
  };

  const handleDrawerClose = () => {
    setAnchorEl(null);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={change}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {check ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfile}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ExitToAppIcon />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  const [login, setLogin] = React.useState("");
  const [usuarios, setUsuarios] = React.useState([]);

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <SvgColor
            svg={LogoAlterdata}
            width={190}
            colors={check ? ["#ffffff"] : ["#0083c1"]}
          />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase
              style={check ? { color: "#fff" } : { color: "#000" }}
              placeholder="Pesquisar…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={login}
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setLogin(e.target.value)}
              color="secondary"
            />
          </div>
          <div className={classes.grow} />
          {menu ? (
            <div className={classes.sectionDesktop}>
              <div style={{ marginTop: 5 }}>
                <Switch color="primary" checked={check} onChange={change} />
              </div>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="primary"
                size="medium"
              >
                <AccountCircle fontSize="inherit" />
              </IconButton>
            </div>
          ) : null}
          {auth.isAuthenticated() ? null : (
            <div style={{ textAlign: "center" }}>
              <Switch color="primary" checked={check} onChange={change} />
            </div>
          )}
          <div className={classes.sectionMobile}>
            {auth.isAuthenticated() ? (
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="default"
              >
                <MoreIcon />
              </IconButton>
            ) : null}
          </div>
        </Toolbar>
      </AppBar>
      {auth.isAuthenticated() ? renderMobileMenu : null}
      {auth.isAuthenticated() ? renderMenu : null}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0083c1",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default NavBar;

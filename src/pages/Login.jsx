import React from "react";
import { useHistory } from "react-router-dom";

//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

//SVGColor
import SvgColor from "react-svg-color";

//ASSETS
import LogoAlterdata from "../assets/controledeequipelogo.svg";

//SERVICES
import auth from "../services/auth";

//HOOKS
import useWindowDimensions from "../hooks/WindowDimension";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Login() {
  let history = useHistory();

  const [login, setLogin] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const novo = {
      login,
      senha,
    };

    auth
      .fazerLogin(novo)
      .then((res) => {
        console.log(res);
        auth.guardarToken(res.data.token, res.data.usuario.id);
        setOpenAlert(true);
        window.location.reload(false);
      })
      .catch((e) => {
        setOpenAlertError(true);
      });
  };

  //Snackbar/Alert
  //AlertSucess

  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  //

  //Alert Error

  const [openAlertError, setOpenAlertError] = React.useState(false);

  const handleClickAlertError = () => {
    setOpenAlertError(true);
  };

  const handleCloseAlertError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlertError(false);
  };

  //

  const { height, width } = useWindowDimensions();
  const classes = useStyles();

  return (
    <div style={{ height: height }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Snackbar
          open={openAlert}
          autoHideDuration={3000}
          onClose={handleCloseAlert}
        >
          <Alert onClose={handleCloseAlert} severity="success">
            Usuário logado com sucesso!!!
          </Alert>
        </Snackbar>
        <Snackbar
          open={openAlertError}
          autoHideDuration={4000}
          onClose={handleCloseAlertError}
        >
          <Alert onClose={handleCloseAlertError} severity="error">
            Houve algum erro ao fazer login. Confira se seu login ou senha estão
            corretos
          </Alert>
        </Snackbar>
        <div className={classes.paper}>
          <SvgColor svg={LogoAlterdata} width={350} colors={["#0083c1"]} />
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Usuário"
              label="Nome de Usuário"
              name="Usuário"
              autoFocus
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Senha"
              label="Senha"
              type="password"
              id="senha"
              autoComplete="current-password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              ke
            />
            {/*<FormControlLabel
            control={<Checkbox value="Lembrar" color="primary" />}
            label="Lembre de mim"
          />*/}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              color="primary"
            >
              Logar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu sua senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Não tem conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

const useStyles = makeStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1vh",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
});

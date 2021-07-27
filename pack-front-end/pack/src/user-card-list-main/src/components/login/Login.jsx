import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LogoAlterdata from "../../assets/logoalterdata.png"
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
          main: '#7bbbdb',
        },
        secondary: {
          main: '#87CEFA',
        },
      },
    });

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={LogoAlterdata} style={{width:130}}/>
        <Typography component="h1" variant="h5" color="Primary">
          Controle de Equipe - Alterdata Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Usuário"
            label="Nome de Usuário"
            name="Usuário"
            autoFocus
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
          />
          {/*<FormControlLabel
            control={<Checkbox value="Lembrar" color="primary" />}
            label="Lembre de mim"
          />*/}
          <ThemeProvider theme={theme}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            color= 'primary'
          >
            Logar
          </Button>
          </ThemeProvider>
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
      <Box mt={8}>

      </Box>
    </Container>
  );
}
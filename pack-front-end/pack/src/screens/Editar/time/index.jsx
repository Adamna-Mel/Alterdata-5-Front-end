import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import apiUsuario from "../../../services/api.usuarios";
import apiTime from "../../../services/api.times";
import api from "../../../services/api";

function EditarTime(props) {
  const { id } = useParams();

  const [nome, setNome] = React.useState("");

  const [times, setTimes] = React.useState([]);

  React.useEffect(() => {
    apiTime.obterequipes().then((res) => {
      setTimes(res);
      console.log(times);
    });
  }, []);

  const history = useHistory();

  const home = () => {
    history.push("/");
    props.chamarAPI();
  };

  const handleClick = () => {
    if (nome.length != 0) {
      const novo = {
        nome,
      };
      apiTime.adicionarTime(novo).then((res) => {
        console.log(res);
        apiUsuario.editarTime(id, res.data.id);
      });
    }
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
    <div className={classes.container}>
      <TextField
        id="filled-required"
        label="Criar Time (MAX. 20)"
        defaultValue=""
        variant="filled"
        onChange={(e) => setNome(e.target.value)}
        value={nome}
        type="text"
        inputProps={{ maxLength: 20 }}
      />

      <div className={classes.buttons}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className={classes.blueButton}
        >
          Criar e adicionar esse usuário ao time
        </Button>

        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick2}
          className={classes.blueButton}
        >
          Escolher time já existente
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {times.map((t) => (
            <MenuItem
              key={t.id}
              onClick={() => {
                handleClose;
                apiUsuario.editarTime(id, t.id);
              }}
            >
              {t.nome}
            </MenuItem>
          ))}
        </Menu>
        <Button onClick={home} className={classes.grayButton}>
          Voltar
        </Button>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  buttons: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  blueButton: {
    backgroundColor: "#0083C1",
    color: "#ffffff",
    margin: 5,
    "&:hover": {
      backgroundColor: "#7BBBDB",
      color: "#000000",
    },
  },
  grayButton: {
    backgroundColor: "#F5F3F4",
    color: "#000000",
    margin: 5,
  },
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    flexDirection: "column",
    maxWidth: 300,
  },
});

export default EditarTime;

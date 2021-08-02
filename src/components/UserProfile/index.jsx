import React, { useState, useEffect } from "react";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import useWindowDimensions from "../../hooks/WindowDimension";

import apiUsuarios from "../../services/api.usuarios";

function UserProfile() {
  const [userId, setUserId] = useState();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [login, setLogin] = useState();
  const [status, setStatus] = useState();
  const [cargo, setCargo] = useState();

  const idUsuario = localStorage.getItem("@user-id");

  const papercss = {
    padding: "25px 20px",
    width: 400,
    margin: "30px auto",
    borderRadius: 20,
  };

  React.useEffect(() => {
    apiUsuarios.obterUsuarioPorId(idUsuario).then((res) => {
      setUserId(res.id);
      setNome(res.nome);
      setEmail(res.email);
      setLogin(res.login);
      setStatus(res.status);
      setCargo(res.cargo);
    });
  }, []);

  const { height, width } = useWindowDimensions();

  return (
    <div style={{ height: height, marginTop: 100 }}>
      <Grid>
        <Paper elevation={7} style={papercss}>
          <Grid align="center">
            <Avatar
              alt="Perfil"
              src={`http://alterdata-5-back-end.herokuapp.com/api/usuarios/avatar/${userId}`}
              style={{
                width: 100,
                height: 100,
                borderRadius: 400 / 2,
                borderStyle: "solid",
                borderColor: "#1A2228",
                marginTop: -80,
              }}
            />
            <Typography style={{ fontSize: 30 }}>{nome}</Typography>
          </Grid>
          <Typography color="primary" style={{ fontSize: 17 }}>
            email
          </Typography>
          <Typography style={{ fontSize: 23 }}>{email}</Typography>
          <Typography color="primary" style={{ fontSize: 17 }}>
            login
          </Typography>
          <Typography style={{ fontSize: 23 }}>{login}</Typography>
          <Typography color="primary" style={{ fontSize: 17 }}>
            status
          </Typography>
          <Typography style={{ fontSize: 23 }}>{status}</Typography>
          <Typography color="primary" style={{ fontSize: 17 }}>
            cargo
          </Typography>
          <Typography style={{ fontSize: 23 }}>{cargo}</Typography>

          <div
            style={{ marginTop: 10, justifyContent: "center", display: "flex" }}
          >
            <Button color="primary" variant="contained">
              Editar Perfil
            </Button>
          </div>
        </Paper>
      </Grid>
    </div>
  );
}

export default UserProfile;

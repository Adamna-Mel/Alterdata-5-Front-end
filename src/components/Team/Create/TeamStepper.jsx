import React, { useState, useEffect } from "react";

//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

//SVGColor
import SvgColor from "react-svg-color";

//COLOR PICKER
import { TwitterPicker } from "react-color";

//#region Icones
import CrystalShine from "../../../assets/icons/crystal-shine.svg";
import BatMask from "../../../assets/icons/bat-mask.svg";
import Clockwork from "../../../assets/icons/clockwork.svg";
import Controller from "../../../assets/icons/controller.svg";
import Daggers from "../../../assets/icons/daggers.svg";
import Fireball from "../../../assets/icons/fireball.svg";
import Hades from "../../../assets/icons/hades.svg";
import MineralHeart from "../../../assets/icons/mineral-heart.svg";
import MoonBat from "../../../assets/icons/moon-bats.svg";
import Mouse from "../../../assets/icons/mouse.svg";
import NightSky from "../../../assets/icons/night-sky.svg";
import Ninja from "../../../assets/icons/ninja.svg";
import NinjaCloud from "../../../assets/icons/ninja-cloud.svg";
import Palette from "../../../assets/icons/palette.svg";
import PawHeart from "../../../assets/icons/paw-heart.svg";
import PencilBrush from "../../../assets/icons/pencil-brush.svg";
import SharkBite from "../../../assets/icons/shark-bite.svg";
import Shuriken from "../../../assets/icons/shuriken.svg";
import Sly from "../../../assets/icons/sly.svg";
import Smartphone from "../../../assets/icons/smartphone.svg";
import Cancel from "../../../assets/icons/cancel.svg";
import Database from "../../../assets/icons/database.svg";
import Luchador from "../../../assets/icons/luchador.svg";

//SERVICES
import apiUsuarios from "../../../services/api.usuarios";
import apiEquipes from "../../../services/api.equipes";

//#endregion

function getSteps() {
  return [
    "Crie um nome para o time",
    "Selecione um icone para o time",
    "Selecione as cores do time",
  ];
}

function getStepContent(step) {
  function IconeAtual() {
    return (
      <SvgColor
        svg={iconeEquipe}
        width={200}
        colors={[corPrimaria, corSecundaria]}
      />
    );
  }
  const idUsuario = localStorage.getItem("@user-id");

  const [idEquipe, setIdEquipe] = useState("");
  const [nomeDaEquipe, setNomeDaEquipe] = useState("");
  const [corPrimaria, setCorPrimaria] = useState("");
  const [corSecundaria, setCorSecundaria] = useState("");
  const [iconeEquipe, setIconeEquipe] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    console.log(idUsuario);
    apiUsuarios
      .obterUsuarioPorId(idUsuario)
      .then((res) => {
        setIdEquipe(res.equipe.idEquipe);

        apiEquipes.obterEquipesPorId(res.equipe.idEquipe).then((res) => {
          setNomeDaEquipe(res.nome);
          setCorPrimaria(res.cor1);
          setCorSecundaria(res.cor2);
          setIconeEquipe(res.icone);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const [nome, SetNome] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaEquipe = {
      nome,
    };

    apiEquipes.adicionarEquipe(novaEquipe);
  };

  const listaIcones = [
    CrystalShine,
    BatMask,
    Clockwork,
    Controller,
    Daggers,
    Fireball,
    Hades,
    MineralHeart,
    MoonBat,
    Mouse,
    NightSky,
    Ninja,
    NinjaCloud,
    Palette,
    PawHeart,
    PencilBrush,
    SharkBite,
    Shuriken,
    Sly,
    Smartphone,
    Cancel,
    Database,
    Luchador,
  ];

  const classes = useStyles();

  switch (step) {
    case 0:
      return (
        <div>
          <TextField
            required
            id="filled-required"
            label="Nome da Equipe (MAX. 20)"
            defaultValue=""
            variant="filled"
            onChange={(e) => SetNome(e.target.value)}
            value={nome}
            type="text"
            inputProps={{ maxLength: 20 }}
            style={{ width: 300 }}
          />
          <div>
            <Button variant="contained" color="primary" type="submit">
              Salvar
            </Button>
          </div>
        </div>
      );
    case 1:
      return (
        <div>
          <div className={classes.icones}>
            {listaIcones.map((icone) => (
              <div onClick={() => setIconeEquipe(icone)}>
                <SvgColor
                  svg={icone}
                  width={40}
                  colors={["#000000", "#ffffff"]}
                />
              </div>
            ))}
          </div>
        </div>
      );
    case 2:
      return (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <p>Cor Primária</p>
              <TwitterPicker
                color={corPrimaria}
                onChange={(corPrimariaAtualizada) =>
                  setCorPrimaria(corPrimariaAtualizada.hex)
                }
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <p>Cor Secundária</p>
              <TwitterPicker
                color={corSecundaria}
                onChange={(corSecundariaAtualizada) =>
                  setCorSecundaria(corSecundariaAtualizada.hex)
                }
              />
            </div>
          </div>
          <div
            style={{
              margin: "auto",
              alignItens: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <IconeAtual />
          </div>
        </div>
      );
    default:
      return "Unknown step";
  }
}

function TeamStepper() {
  //STEPPER
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //
  return (
    <Card className={classes.card}>
      <Stepper
        activeStep={activeStep}
        className={classes.stepper}
        orientation="vertical"
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    VOLTAR
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "FINALIZAR" : "PRÓXIMO"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset}>REINICIAR</Button>
          <Button variant="contained" color="primary" onClick={handleReset}>
            CRIAR TIME
          </Button>
        </Paper>
      )}
    </Card>
  );
}

const useStyles = makeStyles({
  card: {
    borderRadius: 20,
    width: "auto",
    maxWidth: 800,
    maxHeight: "auto",
    height: "auto",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 10,
    marginTop: "2%",
  },
  button: {
    marginTop: 5,
    marginRight: 5,
  },
  actionsContainer: {
    marginBottom: 5,
  },
  resetContainer: {
    padding: 5,
  },
  stepper: {
    padding: 20,
  },
  icones: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    maxWidth: 400,
  },
});

export default TeamStepper;

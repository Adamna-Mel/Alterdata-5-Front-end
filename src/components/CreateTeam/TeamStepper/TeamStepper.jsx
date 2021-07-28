import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

function getSteps() {
  return [
    "Crie um nome para o time",
    "Selecione um icone para o time",
    "Selecione as cores do time",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `COLOCAR INPUT NOME DO TIME`;
    case 1:
      return "COLOCAR LISTA DE ICONES PARA ESCOLHA";
    case 2:
      return `COLOCAR COLORPICKER`;
    default:
      return "Unknown step";
  }
}

function TeamStepper() {
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
    height: "auto",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 10,
    marginTop: "5%",
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
});

export default TeamStepper;

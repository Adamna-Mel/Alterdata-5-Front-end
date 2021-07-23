import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: 20,
      width: '60%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));  


function getSteps() {
    return ['Crie um nome para o seu time', 'Selecione um icone para o seu time', 'Selecione as cores para o seu time'];
  }
  
function getStepContent(step) {
    switch (step) {
      case 0:
        return `INSERIR CAIXA DE TEXTO DA CRIAÇÃO DE TIME`;
      case 1:
        return 'INSERIR CAIXA PARA ESCOLHER ICONE';
      case 2:
        return `INSERIR COLOR PICKER + ICONE`;
      default:
        return 'Unknown step';
    }
  }

function CreateTeam() {
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

    return(
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
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
                            Voltar
                        </Button>
                        <Button
                            variant="contained"
                            style={{backgroundColor: "#0083c1", color: "#ffffff"}}
                            onClick={handleNext}
                            className={classes.button}
                        >
                            {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                        </Button>
                        </div>
                    </div>
                    </StepContent>
                </Step>
                ))}
            </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Deseja criar um time com essas características?</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reiniciar
          </Button>
          <Button className={classes.button} style={{backgroundColor: "#0083c1", color: "#ffffff"}}>
            Criar
          </Button>
        </Paper>
      )}
    </div>
    )
}

export default CreateTeam;
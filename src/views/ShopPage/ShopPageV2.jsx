import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./ShopPage.css";

const steps = [
  {
    label: 'Confirme la selección de sus nuevas mascotas',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Seleccione el modo de envío',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Seleccione el modo de pago',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const ShopPage=()=> {
  const [activeStep, setActiveStep] = React.useState(0);

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
    <div className='todo'>
      <div className='contenedor'>
        <Box sx={{ maxWidth: 600 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Último paso para finalizar la compra </Typography>
                    ) : null
                  }                
                >
                  {step.label}
                </StepLabel>
                
                <StepContent>
                  <div>
                    {index === 0 ? (
                        <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label="Envío premium (24 horas)"
                        labelPlacement="start"
                      />
                      ) : null}
                  </div>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'Finalizar' : 'Siguiente'}                      
                      </Button>                    
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Anterior
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>Todos los pasos diligenciados - Enviar</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                ENVIAR PAGO
              </Button>
            </Paper>
          )}
        </Box>
      </div>
    </div>

    
    
  );
}


export default ShopPage;
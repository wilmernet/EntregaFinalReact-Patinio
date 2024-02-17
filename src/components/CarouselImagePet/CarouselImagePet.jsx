import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {Link} from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const styles = {
  link: {
    textDecoration: 'none', // Quita el subrayado del enlace
    color: 'inherit', // Hereda el color del texto del contenedor
  }
};


const CarouselImagePet= (imgList)=> {
  console.log("documento original",imgList.id);
  let images=imgList.imgList;
  console.log(images);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    // <Box sx={{ maxWidth: 400, flexGrow: 1 , backgroundColor:"#ffffff9f", marginTop:"30px" }}>      
    <Box sx={{ maxWidth: 400, maxHeight: "340px", backgroundColor: "white", flexGrow: 1 , marginTop:"30px", marginLeft:"30px" }}>      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        
        {images.map((step, index) => (          
          // <div key={step.label}>
            // {Math.abs(activeStep - index) <= 2 ? (
              <Link to={`/DetailPage/${imgList.id}`} style={styles.link}>
                <Box
                  component="img"
                  sx={{                    
                    height: 255,
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step}
                  // alt={step.label}
                />
              </Link>              
            // ) : null}
          // </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Siguiente
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Anterior
          </Button>
        }
      />
    </Box>
  );
}

export default CarouselImagePet;
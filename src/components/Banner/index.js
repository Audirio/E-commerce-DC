import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import "./styles.scss";
import { Button } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);





const images = [
  {
    topTitle: 'Melhores ofertas personalidas',
    title: 'Queima de estoque NIKE'+String.fromCodePoint('0x1F525'),
    description: 'Bla bla bla bla bla Bla bla bla bla bla Bla bla bla bla bla',
    actionButton: 'Ver ofertas',
    image: 'https://freepngimg.com/thumb/categories/627.png',
  },
  {
    topTitle: 'Melhores ofertas personalidas',
    title: 'Últimas unidades Olympkus ',
    description: 'Bla bla bla bla bla Bla bla bla bla bla Bla bla bla bla bla',
    actionButton: 'Ver ofertas',
    image: 'https://www.pngmart.com/files/1/Nike-Shoes-PNG-Clipart.png',
  },
  {
    topTitle: 'Melhores ofertas personalidas',
    title: 'Rebook em promoção',
    description: 'Bla bla bla bla bla Bla bla bla bla bla Bla bla bla bla bla',
    actionButton: 'Ver ofertas',
    image: 'https://www.pngmart.com/files/1/Women-Shoes-PNG-Clipart.png',
  },
  {
    topTitle: 'Melhores ofertas personalidas',
    title: 'Aproveite ',
    description: 'Bla bla bla bla bla Bla bla bla bla bla Bla bla bla bla bla',
    actionButton: 'Ver ofertas',
    image: 'https://www.pngmart.com/files/1/Women-Shoes.png',
  },
];

export default function Banner() {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#C92071',
      },
    },
  });
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
    <ThemeProvider theme={theme}>
    <div className="div_color">
      <Box className="box" sx={{flexGrow: 1 }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.title}>
              {Math.abs(activeStep - index) <= 2 ? (
                <section className="carousel">
                  <div className='div_left'>
                      <h4>{step.topTitle}</h4>
                      <h1>{step.title}</h1>
                      <p>{step.description}</p>

                      <Button className='button_oferta' color="secondary" variant="contained">
                          {step.actionButton}
                      </Button>
                  </div>
                  <div>
                      <img src={step.image}/>
                  </div>
                </section>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          style={{justifyContent: 'center'}}
        />
      </Box>
    </div>
    </ThemeProvider>
  );
}

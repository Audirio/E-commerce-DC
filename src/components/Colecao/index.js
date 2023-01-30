import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';

import "./styles.scss";
import { Button, Grid, Paper, Text, Typography } from '@mui/material';



const images = [
  {
    title: 'Coleção',
    description: 'Nike',
    actionButton: 'Saiba mais',
    image: 'https://freepngimg.com/thumb/categories/627.png',
    actionButton: 'Ver ofertas',
    discount: true
  },
  {
    title: 'Coleção',
    description: 'Gillette',
    actionButton: 'Saiba mais',
    image: 'https://freepngimg.com/thumb/artificial_grass/47653-9-razor-download-hd-png.png',
    actionButton: 'Ver ofertas',
    discount: false
  },
  {
    title: 'Coleção',
    description: 'Airpods',
    actionButton: 'Comprar agora',
    image: 'https://freepngimg.com/thumb/bluetooth/82364-airpods-gear-samsung-iconx-bluetooth-hardware-technology.png',
    actionButton: 'Ver ofertas',
    discount: false
  }
];

export function CardColecao(props) {
  return (
    <Grid container sx={{ width: 400, height: 200, backgroundColor: '#D8D8D8', borderRadius: 2 }}>
      <Grid item xs={6} >

        <div style={{ height: 10, marginTop: 5  , marginLeft: 5 }}>
          {
              props.discount === true && <span className="discount" >30% OFF</span>
          }
        </div>

        <Typography align="center" mt={3} variant="h4" color="black" fontWeight={"bold"}>{props.title}</Typography>
        <Typography align="center" variant="h4" color="black" fontWeight={"bold"}>{props.description}</Typography>
        <div style={{ marginTop: 10, marginLeft: 50 }}>
          <Button sx={{
            background: '#FFF',
            color: '#FF0080',
            borderRadius: 1,
            border: 0,
            height: 40,
          }} >
            Ver Colecão
          </Button>
        </div>
      </Grid>

      <Grid item xs={6}>
        <img src={props.image} style={{ height: 200, width: 200, marginTop: 10 }} />
      </Grid>

    </Grid>
  )
}

export default function Colecao() {
  //const [activeStep, setActiveStep] = React.useState(0);
  //const maxSteps = images.length;

  return (
    <div >
      <Grid container spacing={5} justifyContent="center" alignItems="center" >
      {images.map((step) => (
        <Grid item  >
          <CardColecao discount={step.discount} 
                      image={step.image} 
                      title={step.title} 
                      description={step.description} />
        </Grid>
         ))}
        </Grid>
    </div>
  );
}
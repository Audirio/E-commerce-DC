import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

//import "./styles.scss";
import { StyleSheet, StatusBar, SafeAreaView, Text, View } from 'react';



const images = [
  {
    title: 'Tenis NIKE',
    description: 'Super coleção Nike',
    actionButton: 'Saiba mais',
    image: 'https://freepngimg.com/thumb/categories/627.png',
  },
  {
    title: 'Tenis Olympkus ',
    description: 'Super coleção Olympkus',
    actionButton: 'Saiba mais',
    image: 'https://www.pngmart.com/files/1/Nike-Shoes-PNG-Clipart.png',
  },
  {
    title: 'Rebook coleção',
    description: 'Rebook super coleção',
    actionButton: 'Comprar agora',
    image: 'https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/645dd61a00924f37b033ae3600972b9f_9366/Classic_Leather_Make_It_Yours_Shoes_Blue_GY1522_01_standard.jpg',
  }
];

export default function Colecao() {
  //const [activeStep, setActiveStep] = React.useState(0);
  //const maxSteps = images.length;

  return (
    <Tabs >
      <Card sx={{ width: 345, margin: 5, height: 200, backgroundColor: '#F5FFFA' }}>
        <CardMedia sx={{height: 100, width: 200 }}
          component="img"
          height="200"
          image={images[0].image}
          alt={images[0].title}
        />
      </Card>

      <Card  sx={{ width: 345, margin: 5, height: 200, backgroundColor: '#F5FFFA' }}>
        <CardMedia sx={{height: 100, width: 200 }}
          component="img"
          height="200"
          image={images[1].image}
          alt={images[1].title}
        />

        <CardActions>
          <Button
            href={'www.google.com.br'} Recipe >
          </Button>
        </CardActions>

      </Card>

      <Card  sx={{ width: 345, margin: 5 , height: 200, backgroundColor: '#F5FFFA' }}>
        <CardMedia sx={{height: 100, width: 200 }}
          component="img"
          height="200"
          image={images[2].image}
          alt={images[2].title}
        />
      </Card>
    </Tabs>
  );
}

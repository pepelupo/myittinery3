import './Hero.css';
import React from 'react';
import ReactPlayer from 'react-player';
import heroVideo from './cafe.mp4';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Hero() {
  return (
    <div id='videoHeroTextoBoton'>
      <Box
  height="100%"
  display="flex"
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  color="#fff"
>
  <div id='textoBotonHero'>
  <h3>Preparate para un viaje super magico</h3>
  </div>
  <Button color="primary" variant="contained" id='boton'>
    Click Me
  </Button>
</Box>
          <ReactPlayer
        url={heroVideo}
        className='react-player'
        playing
        loop
        muted
        width="100%"
        // height="100%"
/>

    </div>
    
  )
}


export default Hero
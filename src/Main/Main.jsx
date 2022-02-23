import React from 'react'
import Hero from '../Hero/Hero'
import Carrusel from '../Carousel/Carousel'
import './Main.css'

function Main() {
  return (
    <div>
        <Hero/>
        <h2 id='titulos'>Mira las ciudades!</h2>
        <Carrusel/>
    </div>
  )
}

export default Main
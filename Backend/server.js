const express = require('express')
const port =4000 //esto dice en que puerto va a correr el servidor


const app = express()
//Hay que instalar en la consola la hta Nodemon npm install -g nodemon . El -g lo que hace es instalarla de manera global
app.listen(port,()=>console.log(`El server esta corriendo ${port}`)) //Esto manda un console log cuando arranca el servidor
const express = require('express');
const conectarDB = require ('./config/db');
const cors = require ("cors");

// Crear Servidor

const app = express();

//Conectar BD
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

//Definir ruta principal
/*app.get('/',(req,res)=>{
    res.send('Hola matias');
})*/

app.listen(4000, ()=>{
    console.log('El servidor esta corriendo')
})
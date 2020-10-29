/*
Implementar la capa de backend(controlador)
necesaria para servir preguntas y respuestas a una app dee frontend de Q&A*/


const express = require('express'); //llamamos o requerimos el node_module express despues de instalar con npm i express
const bodyParser = require('body-parser'); //requerimos paquete body parser de express que se usa para poder parsear el body

const server = express(); //establecemos express como server

const listenPort = 8080; //establecemos puerto de escucha

const staticFilePath = express.static('public'); //referencia a carpeta creada por mi, public

server.use(staticFilePath);
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

//-----------------------API REST ------------------------------//
let miTexto = [];

server.get('/loadImage', (req,res) =>{
    
    res.send({ src : 'img/atlasV.jpg' });
})

server.get('/getText', (req,res) =>{

    let request = req.query.value;
    miTexto.push(request);
    // console.log("query =",req.query.value)
    res.send({ value : request});
})

//----------------------------START SERVER -----------------------------//

server.listen(listenPort, () => console.log(`servidor escuchando en el puerto ${listenPort}`))

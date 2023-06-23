const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json(); 

app.use(cors);

// Se establece la conexión con la base de datos MySQL
const connection = mysql.createConnection( {
    host: "",
    user: "",
    password: "",
    port: "",
    database: "",
});

// Se establece la conexión con el servidor de la base de datos MySQL
connection.connect(function(err:any) { 
    if (err) {
        console.error("Error al intentar conectar a la base de datos " + err.stack);
        return;
    } else {
        console.log("Conexión establecida " + connection.threadId);
    }
});

// Se configura el servidor
const configuration = {
    hostname: "",
    port: "",
};

// POST

// GET 

// DELETE

// UPDATE



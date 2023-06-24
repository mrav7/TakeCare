"use strict";
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const app = express();
app.use(cors());
app.set('port', process.env.PORT || 3000);
// Se establece la conexión con la base de datos MySQL
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: "3306",
    database: "DB",
});
// Se establece la conexión con el servidor de la base de datos MySQL
connection.connect(function (err) {
    if (err) {
        console.error("Error al intentar conectar a la base de datos " + err.stack);
        return;
    }
    else {
        console.log("Conexión establecida " + connection.threadId);
    }
});
app.listen(app.get('port'), () => {
    console.log("Servidor funcionando en el puerto", app.get('port'));
});
// Método GET (Devuelve todos los usuarios de la tabla Users.)
app.get('/getUsers', (req, res) => {
    connection.query("SELECT * FROM Users", (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send("No se hace ha podido realizar SELECT al servidor");
        }
        else {
            const response = {
                status: "Exito",
                message: "Se ha realizado SELECT exitosamente",
                data: results
            };
            res.status(200).json(response);
        }
    });
});
// Método GET (Devuelve un solo usuario de la tabla Users a partir de su ID)
app.get('/getUser/:id', (req, res) => {
    let id = req.params.id;
    connection.query("SELECT * FROM Users WHERE `Users`.`ID` = ? LIMIT 1", [id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send("No se ha podido realizar SELECT en el servidor");
        }
        else {
            if (results.length > 0) {                
                console.log("Usuario encontrado exitosamente!")
                res.status(200).json(results[0]);
            }
            else {
                res.status(404).send("No se encontró ningún usuario con el ID especificado");
            }
        }
    });
});
//Método POST
app.post("/createUser", jsonParser, (req, res) => {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let profession = req.body.profession;
    let password = req.body.password;
    let isAdmin = req.body.isAdmin;
    connection.query("INSERT INTO Users (firstname,lastname,email,profession,password,isAdmin) VALUES (?,?,?,?,?,?)", [firstname, lastname, email, profession, password, isAdmin], (error, results, fields) => {
        if (error) {
            console.error("Error al crear el usuario: ", error);
            res.status(500).send("Error al crear el usuario");
            return;
        }
        console.log("Usuario creado exitosamente!");
        res.status(200).send("Usuario creado exitosamente");
    });
});

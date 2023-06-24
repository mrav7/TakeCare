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
connection.connect(function(err:any) {
    if (err) {
        console.error("Error al intentar conectar a la base de datos " + err.stack);
        return;
    } else {
        console.log("Conexión establecida " + connection.threadId);
    }
});

const configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
}

app.listen(app.get('port'), () => {
    console.log("Servidor funcionando en el puerto", app.get('port'));
});

app.post("/createUser", jsonParser,(req:any, res:any) => {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let profession = req.body.profession;
    let password = req.body.password;
    let isAdmin = req.body.isAdmin;
    let user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        profession: profession,
        password: password,
        isAdmin: isAdmin
    }

    connection.query("INSERT INTO Users SET ?", user, (error:any, results:any, fields:any) => {
        if (error) {
            console.error("Error creating user: ", error);
            res.status(500).send("Error creating user");
            return;
        }
        
        console.log("User created successfully!");
        res.status(200).send("User created successfully");
    });
});

app.get('/users', (req:any, res:any) => {
    connection.query("SELECT * FROM Users", (error:any, results:any) => {
        if (error) {
            console.error(error);
            res.status(500).send("No se hace ha podido realizar SELECT al servidor");
        } else {
            const response = {
                status: "Exito",
                message: "Se ha realizado SELECT exitosamente",
                data: results
            }
            res.status(200).json(response);
        }
    })
})



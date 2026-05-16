// Importamos las librerías necesarias
const express = require("express");
const cors = require("cors");

// Creamos la aplicación
const app = express();

// Permitir recibir datos en JSON
app.use(express.json());

// Permitir comunicación con el frontend
app.use(cors());

// Simulación de base de datos en memoria
let usuarios = [];

/*
RUTA PRINCIPAL
Sirve para comprobar que el servidor funciona
*/
app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

/*
SERVICIO WEB: REGISTRO
Recibe usuario y contraseña y los guarda
*/
app.post("/register", (req, res) => {

    const { usuario, password } = req.body;

    usuarios.push({ usuario, password });

    res.json({
        mensaje: "Usuario registrado correctamente"
    });

});

/*
SERVICIO WEB: LOGIN
Valida usuario y contraseña
*/
app.post("/login", (req, res) => {

    const { usuario, password } = req.body;

    const encontrado = usuarios.find(
        u => u.usuario === usuario && u.password === password
    );

    if (encontrado) {

        res.json({
            mensaje: "Autenticación satisfactoria"
        });

    } else {

        res.status(401).json({
            mensaje: "Error en la autenticación"
        });

    }

});

/*
INICIAR SERVIDOR
*/
app.listen(3000, () => {
    console.log("Servidor ejecutándose en http://localhost:3000");
});
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let usuarios = [];

// Ruta principal
app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

// Registro
app.post("/register", (req, res) => {

    // Validar body vacío
    if (!req.body) {
        return res.status(400).json({
            mensaje: "No se recibieron datos"
        });
    }

    const usuario = req.body.usuario;
    const password = req.body.password;

    // Validar campos
    if (!usuario || !password) {
        return res.status(400).json({
            mensaje: "Debe ingresar usuario y contraseña"
        });
    }

    usuarios.push({
        usuario,
        password
    });

    return res.status(200).json({
        mensaje: "Usuario registrado correctamente"
    });

});

// Login
app.post("/login", (req, res) => {

    if (!req.body) {
        return res.status(400).json({
            mensaje: "No se recibieron datos"
        });
    }

    const usuario = req.body.usuario;
    const password = req.body.password;

    if (!usuario || !password) {
        return res.status(400).json({
            mensaje: "Debe ingresar usuario y contraseña"
        });
    }

    const encontrado = usuarios.find(
        user => user.usuario === usuario && user.password === password
    );

    if (encontrado) {
        return res.status(200).json({
            mensaje: "Autenticación satisfactoria"
        });
    }

    return res.status(401).json({
        mensaje: "Error en la autenticación"
    });

});

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor ejecutándose en http://localhost:3000");
});
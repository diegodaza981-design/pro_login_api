// FUNCION PARA REGISTRAR USUARIO

function registrar() {

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/register", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            usuario: usuario,
            password: password
        })

    })

    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerText = data.mensaje;
    });

}
// FUNCION PARA LOGIN
function login() {

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            usuario: usuario,
            password: password
        })

    })

    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerText = data.mensaje;
    })

    .catch(() => {
        document.getElementById("resultado").innerText = "Error en la autenticación";
    });

}
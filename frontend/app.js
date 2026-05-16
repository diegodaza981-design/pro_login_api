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
    .then(response => response.json())
    .then(data => {
        document.getElementById("resultado").innerText = data.mensaje;
        console.log(data);
    })
    .catch(error => {
        document.getElementById("resultado").innerText = "Error al registrar usuario";
        console.error(error);
    });

}

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
    .then(response => response.json())
    .then(data => {
        document.getElementById("resultado").innerText = data.mensaje;
        console.log(data);
    })
    .catch(error => {
        document.getElementById("resultado").innerText = "Error en autenticación";
        console.error(error);
    });

}
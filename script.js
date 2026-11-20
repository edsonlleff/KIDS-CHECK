// Esta funcion muestra u oculta el menu en celulares.
function mostrarMenu() {
    var menu = document.getElementById("menu");

    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Esta funcion muestra el motivo que selecciono el usuario.
function cambiarAsunto() {
    var asunto = document.getElementById("asunto").value;
    var texto = document.getElementById("texto-asunto");

    if (asunto == "") {
        texto.textContent = "Selecciona el motivo de tu mensaje.";
    } else {
        texto.textContent = "Seleccionaste: " + asunto;
    }
}

// Esta funcion muestra una respuesta al enviar el formulario.
function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var respuesta = document.getElementById("respuesta");

    respuesta.textContent = "Gracias " + nombre + ". Este formulario es solo una demostracion.";
}

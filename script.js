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

// Esta funcion muestra los datos del formulario en la consola.
function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    console.log("Formulario enviado");
    console.log("Nombre: " + nombre);
    console.log("Correo: " + correo);
    console.log("Motivo: " + asunto);
    console.log("Mensaje: " + mensaje);
}

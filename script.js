// Pedir nombre al usuario
let nombre = prompt("¿Cuál es tu nombre?");

let saludo = document.querySelector("#saludo");

saludo.textContent = "¡Hola, " + nombre + "! 👋";

let anchoVentana = document.querySelector("#ancho-ventana");
let altoVentana = document.querySelector("#alto-ventana");

function actualizarTamaño() {
    anchoVentana.textContent = "Ancho de la ventana: " + window.innerWidth + " px";
    altoVentana.textContent = "Alto de la ventana: " + window.innerHeight + " px";
}

actualizarTamaño();

window.addEventListener("resize", actualizarTamaño);
let idioma = document.querySelector("#idioma");
let conexion = document.querySelector("#conexion");

idioma.textContent = "Idioma: " + navigator.language;

function actualizarConexion() {
    if (navigator.onLine) {
        conexion.textContent = "Estado de conexión: 🟢 En línea";
    } else {
        conexion.textContent = "Estado de conexión: 🔴 Sin conexión";
    }
}

actualizarConexion();

window.addEventListener("online", actualizarConexion);
window.addEventListener("offline", actualizarConexion);
let botonUbicacion = document.querySelector("#btn-ubicacion");
let ubicacion = document.querySelector("#ubicacion");

botonUbicacion.addEventListener("click", obtenerUbicacion);

function obtenerUbicacion() {
    ubicacion.textContent = "Obteniendo ubicación...";

    navigator.geolocation.getCurrentPosition(
        mostrarUbicacion,
        mostrarError
    );
}

function mostrarUbicacion(posicion) {
    const latitud = posicion.coords.latitude;
    const longitud = posicion.coords.longitude;
    const precision = posicion.coords.accuracy;

    ubicacion.textContent =
        "Latitud: " + latitud +
        " | Longitud: " + longitud +
        " | Precisión: aproximadamente " + precision + " metros";
}

function mostrarError() {
    ubicacion.textContent =
        "No fue posible obtener tu ubicación.";
}
let botonModo = document.querySelector("#btn-modo");

botonModo.addEventListener("click", cambiarModo);

function cambiarModo() {
    document.body.classList.toggle("modo-oscuro");
}
let botonRecargar = document.querySelector("#btn-recargar");

botonRecargar.addEventListener("click", recargarPagina);

function recargarPagina() {
    location.reload();
}
let botonInformacion = document.querySelector("#btn-informacion");
let informacionSitio = document.querySelector("#informacion-sitio");

botonInformacion.addEventListener("click", mostrarInformacion);

function mostrarInformacion() {
    informacionSitio.textContent =
        "URL completa: " + location.href +
        " | Dominio: " + location.hostname +
        " | Ruta: " + location.pathname;
}
let titulo = document.querySelector("#titulo");

titulo.addEventListener("click", cambiarTitulo);

function cambiarTitulo() {
    titulo.classList.toggle("titulo-grande");
}
# 🚀 Mi Panel del Navegador

## 📌 Descripción

Mi Panel del Navegador es una página web interactiva desarrollada con HTML, CSS y JavaScript.

El proyecto permite obtener información del navegador y de la ventana actual, además de realizar diferentes acciones mediante botones e interacción con la página.

## ⚙️ Funcionalidades

El proyecto incluye:

* 👋 Solicitud del nombre del usuario mediante `prompt()`.
* 🖥️ Visualización del ancho y alto de la ventana.
* 🔄 Actualización automática del tamaño al cambiar la ventana.
* 🌐 Visualización del idioma del navegador.
* 🟢 Detección del estado de conexión a Internet.
* 📍 Obtención de la ubicación mediante geolocalización.
* 🌙 Cambio entre modo claro y modo oscuro.
* 🔄 Recarga de la página.
* ℹ️ Visualización de información de la página actual.
* 👆 Interacción con el título mediante un evento `click`.
* 📋 Generación de un reporte con información del navegador.

## 🌐 Conceptos de BOM utilizados

Durante el proyecto utilicé diferentes objetos y propiedades del BOM:

* `window.innerWidth` → obtiene el ancho de la ventana.
* `window.innerHeight` → obtiene el alto de la ventana.
* `window.addEventListener()` → permite detectar eventos relacionados con la ventana.
* `navigator.language` → obtiene el idioma del navegador.
* `navigator.onLine` → permite conocer el estado de conexión.
* `navigator.geolocation` → permite solicitar la ubicación del usuario.
* `location.reload()` → recarga la página.
* `location.href` → obtiene la URL completa.
* `location.hostname` → obtiene el dominio.
* `location.pathname` → obtiene la ruta actual.

## 🧩 Conceptos de DOM utilizados

Para modificar la página dinámicamente utilicé:

* `document` → permite acceder al documento HTML.
* `querySelector()` → permite seleccionar elementos HTML.
* `textContent` → permite modificar el texto de los elementos.
* `classList.toggle()` → permite agregar o quitar una clase CSS.
* `addEventListener()` → permite responder a eventos del usuario.
* Manipulación de elementos HTML mediante JavaScript.

## ⭐ Funcionalidad extra

Como funcionalidad extra agregué un **reporte del navegador**.

Al presionar el botón correspondiente, se muestra un resumen con información como:

* Tamaño de la ventana.
* Idioma del navegador.
* Estado de conexión.
* URL actual.

## 🧠 Lo que más me costó

Lo que más me costó fue entender cómo combinar el BOM y el DOM para que la información obtenida del navegador pudiera mostrarse y actualizarse dentro de la página.

También fue necesario comprender cómo funcionan los eventos mediante `addEventListener()`, especialmente para detectar cambios en el tamaño de la ventana y en la conexión a Internet.

## 🛠️ Tecnologías utilizadas

* HTML
* CSS
* JavaScript
* BOM
* DOM
* Git
* GitHub

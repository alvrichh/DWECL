/**
 * Crea una aplicación web que tenga botones para permitir modificar las siguientes propiedades de una  ventana:
- Abrir una ventana nueva: - Debes preguntar al usuario si está de acuerdo o no, y solo si acepta se abrirá la nueva ventana.
- La nueva ventana tendrá las siguientes propiedades: no tendrá barra de herramientas, ni location, ni barra de  menú, ni será redimensionable. Tendrá 200x80 píxeles y se posicionará en 500x500 píxeles.
- La nueva ventana incluirá un pequeño texto y un botón que al hacer clic cerrará la ventana.
- Cerrar la ventana creada: si la ventana está cerrada mostrará un mensaje de error.
- Mover la ventana 10 píxeles a la derecha y abajo.
- Mover la ventana a la posición 100,100.
- Aumentar el tamaño de la ventana 10 píxeles de ancho y largo. 
 Todos los botones, excepto el primero y el segundo, los puedes programar directamente mediante la  propiedad `onClick`, por ejemplo: 
<input type=“button” value=“Imprimir” onClick=“print()”/>

* By: Álvaro Rodríguez Molina
 */

let nuevaVentana = null;

function abrirNuevaVentana() {
    let res = confirm("¿Estás completamente seguro de abrir una ventana nueva?");
    if (res) {
        nuevaVentana = window.open("", "nueva", "toolbar=no,location=no,menubar=no,resizable=no,width=200,height=80,left=500,top=500");
        nuevaVentana.document.write("<p>Esto es una ventana nueva :D</p>");
    }
}
//si la ventana no está cerrada me la cierra, pongo nuevaVentana para que salga también el mensaje aunque no se haya creado la ventana previamente
function cerrarNuevaVentana() {
    if (nuevaVentana && !nuevaVentana.closed) {
        nuevaVentana.close();
    } else {
        alert("No hay ventana que cerrar.");
    }
}
function moverDerechaAbajo() {
    if (nuevaVentana && !nuevaVentana.closed) {
        nuevaVentana.moveBy(10, 10);
    } else {
        alert("No hay ventana que mover.");
    }
}
function moverPosicion() {
    if (nuevaVentana && !nuevaVentana.closed) {
        nuevaVentana.moveTo(100, 100);
    } else {
        alert("No hay ventana que mover.");
    }
}
function cambiarTamano(){
    if (nuevaVentana && !nuevaVentana.closed) {
        nuevaVentana.resizeBy(10, 10);
    } else {
        alert("No hay ventana que cambiar.");
    }
}
//¿Ha funcionado correctamente todo lo que has programado? ¿Qué crees que ha podido pasar? Agrega tu respuesta como comentario de la tarea. 
/* hay propiedades que no funcionan, por ejemplo el que no sea redimensionable, lo que puede pasar es que sea 
diferente dependiendo del navegador tampoco el nombre de la nueva ventana se puede modificar, las caracteristicas no funcionan en general */
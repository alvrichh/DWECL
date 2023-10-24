/**
 * 
Crea una web, con su correspondiente código externo en js,  para la gestión de una lista de ciudades, haciendo uso de Arrays. 
Para ello debes crear primero un array con los nombres de al menos 4 ciudades.

Cuando el usuario cargue la página, se cargará un prompt donde se mostrarán (en el prompt, no en la página) las opciones:

1. Mostrar número de ciudades.

2. Mostrar listado de ciudades

3.- Mostrar listado de ciudades ordenadas alfabéticamente

4.- Mostrar un intervalo de ciudades (y le pedirá que introduzca el intervalo en formato inicio-fin)

5.- Añadir una ciudad al principio del array (se pedirá que se introduzca el nombre de la ciudad)

6.- Borrar una ciudad del final del array.

7.- Se pide el nombre de una ciudad, y se devuelve la posición que ocupa en el array. Si la ciudad no se encuentra en el array, se devuelve un mensaje indicando el error.

NO SE CONTROLA LA PULSACIÓN DEL BOTÓN CANCELAR

By: Álvaro Rodríguez Molina
 */

let ciudades = new Array("Sevilla", "Córdoba", "Cádiz", "Almería");

let correcto = true;

let input = parseInt(prompt("Selecciona una opción: \n\t1. Mostrar número de ciudades.\n\t2. Mostrar listado de ciudades\n\t3.- Mostrar listado de ciudades ordenadas alfabéticamente\n\t4.- Mostrar un intervalo de ciudades (y le pedirá que introduzca el intervalo en formato inicio-fin)\n\t5.- Añadir una ciudad al principio del array (se pedirá que se introduzca el nombre de la ciudad)\n\t6.- Borrar una ciudad del final del array.\n\t7.- Se pide el nombre de una ciudad, y se devuelve la posición que ocupa en el array. Si la ciudad no se encuentra en el array, se devuelve un mensaje indicando el error."));
switch (input) {
    case 1:
        alert(ciudades.length);
        break;
    case 2:
        alert(ciudades);
        break;
    case 3:
        alert(ciudades.sort());
        break;
    case 4:
        let op = parseInt(prompt("Introduce intervalo inicio:"));
        let op2 = parseInt(prompt("Introduce el intervalo final:"));
        alert(ciudades.slice(op - 1, op2));
        break;
    case 5:
        let ciudad = prompt("Introduce otra ciudad: ");
        ciudades.unshift(ciudad);
        alert(ciudades);
        break;
    case 6:
        ciudades.pop();
        alert(ciudades);
        break;
    case 7:
        let posicion = prompt("Introduce una ciudad de las siguientes y se mostrará la posición del array:\n" + ciudades);
        alert(ciudades.indexOf(posicion)); //Si pone Sevilla devolverá 0
        break;
    default:
        alert("Introduce una opción correcta.")
        break;
}

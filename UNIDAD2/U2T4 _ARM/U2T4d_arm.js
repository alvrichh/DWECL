/*
EJERCICIO 2:
Realizar un script que pregunte: ¿Está seguro de que quiere hacer esto?
*/
// Preguntar al usuario
// Pedir al usuario su nombre y edad
let nombre = prompt("Por favor, introduce tu nombre:");
let edad = prompt("Hola " + nombre + ", por favor, introduce tu edad:");

// Convertir la edad a número
edad = parseInt(edad);

// Verificar si es mayor o menor de edad
let esMayorDeEdad = edad >= 18 ? true : false;

// Calcular la cantidad aproximada de días vividos (considerando un año de 365.25 días)
let diasVividos = edad * 365.25;

// Mostrar saludo y detalles
alert("Hola " + nombre + "! \n" +
    "Tienes " + edad + " años. \n" +
    "Eres " + (esMayorDeEdad ? "mayor" : "menor") + " de edad. \n" +
    "Has vivido " + Math.round(diasVividos) + " días.");

/*
ÁLvaro Rodríguez Molina
*/


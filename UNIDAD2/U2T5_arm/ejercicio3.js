/*

Ejercicio 3:

Escribe un programa que pida al usuario un día de la semana y que muestre por consola el día siguiente. 
Si se introduce un valor que no corresponda a un día de la semana, se le mostrará un mensaje al usuario.

By: Álvaro Rodríguez
*/
let diaSemana = prompt('Introduce un día de la semana (en minúsculas, por ejemplo, "lunes"):');

let diaSiguiente;

switch (diaSemana) {
    case 'lunes':
        diaSiguiente = 'martes';
        break;
    case 'martes':
        diaSiguiente = 'miércoles';
        break;
    case 'miércoles':
        diaSiguiente = 'jueves';
        break;
    case 'jueves':
        diaSiguiente = 'viernes';
        break;
    case 'viernes':
        diaSiguiente = 'sábado';
        break;
    case 'sábado':
        diaSiguiente = 'domingo';
        break;
    case 'domingo':
        diaSiguiente = 'lunes';
        break;
    default:
        console.log("'" + diaSemana +"' no me sirve lo siento");
        alert('El valor ingresado no corresponde a un día de la semana válido.');
        break;
}
if (diaSiguiente) {
    console.log(diaSiguiente);
}
//alert('El usuario ha introducido el ' + diaSemana + ', y el día siguiente es ' + diaSiguiente + '.')



/**
Realiza una aplicación para gestionar la información de una escuela de tenis. Para ello se va a construir una web con información de la escuela (tarifas, horarios, etc) y además, deberá aparecer una opción "Socios" para la gestión de socios del club, a la cual podrá acceder el administrador de la web para realizar determinadas operaciones de administración. El responsable te ha facilitado una lista con los datos que deben almacenarse de cada socio, que son el número de socio, DNI, nombre, apellidos, fecha de nacimiento y localidad.
Operaciones con datos de socios:

Alta de un nuevo socio - Se pedirán todos sus datos
Baja de un socio (por el número de socio o por DNI).
Modificar la localidad del socio.
Incluye una función que, dada la fecha de nacimiento del socio (se la pasas por parámetro) devuelva (return) el nombre de la categoría a la que pertenece. Las categorías serán las siguientes:

Senior: 19 o mas años
Juvenil: 16, 17 y 18 años
Cadetes: 14 y 15 años
Infantil: 12 y 13 años
Alevín: 10 y 11 años
Benjamín: 8 y 9 años
Mostrar todos los datos de los socios (utilizando document.write) y creando una estructura de tabla. Además, la tabla incluirá una última columna llamada Categoría, que mostrará la categoría a la que pertenece el socio.
Buscar un socio a partir de su DNI o de su nombre y apellidos y mostrar sus datos.

Buscar todos los socios de una categoría (debes crear una función que, dada una categoría, devuelva un año de nacimiento; y después, mostrar todos los socios que nacieron ese año).
Dada una localidad, mostrar una lista con todos los socios de esa localidad.
En una aplicación real, todos estos datos de socios estarían en una base de datos en el backend. Como no tenemos herramientas para hacerlo en este ejercicio, utiliza un array como "base de datos".

Para trabajar con objetos, crea un objeto que sea Socio y piensa qué métodos estarán dentro del objeto y cuáles serán funciones externas.

GUARDA LOS ARCHIVOS, SIGUIENDO LA REGLA DE NOMBRES QUE UTILIZAMOS PARA TODAS LAS TAREAS.

By: Álvaro Rodríguez Molina

 */

let socios = [];

function Socio() {
    this.nSocio = "";
    this.dni = "";
    this.nombre = "";
    this.apellidos = "";
    this.fechaNacimiento = "";
    this.localidad = "";
}
function Socio(nSocio, dni, nombre, apellidos, fechaNacimiento, localidad) {
    this.nSocio = nSocio;
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.localidad = localidad;
}
function darAlta() {
    alert("Alta de un nuevo socio - Se pedirán todos sus datos.");
    let a = prompt("Introduce número de Socio: ");
    let b = prompt("Introduce DNI: ");
    let c = prompt("Introduce nombre: ");
    let d = prompt("Introduce apellidos: ");
    let e = prompt("Introduce fecha de nacimiento: ");
    let f = prompt("Introduce localidad: ");
    let alta = new Socio(a, b, c, d, e, f);
    socios.push(alta);
}
function darBajaDni(){
    let res = prompt("Introduce numero de socio: ");


}
function darBajaDni(){
    let res = prompt("Introduce DNI: ");

}

function darBaja() {
    alert("Baja de un socio (por el número de socio o por DNI)");
    let op = prompt("Dar de baja mediante:\n1 - Número de socio\n2 - DNI") * 1;
    switch (op) {
        case 1:
            darBajaDni();
            break;
        case 2:
            darBajaDni();
            break;
        default:
            alert("Introduce una opción correcta.");
            break;
        }
        
}

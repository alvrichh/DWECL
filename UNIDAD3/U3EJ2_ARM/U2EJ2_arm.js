/**
 * Crea una web, con su correspondiente código externo en js,  
 * que pida al usuario su nombre y apellidos(por SIMPLICIDAD no se 
 * admiten ni nombres ni apellidos compuestos) y muestre:

- La cadena en minúsculas y en mayúsculas.

- Que divida el nombre y los apellidos y los muestre en 3 líneas, 
donde ponga Nombre: / Apellido1: / Apellido 2:

- El tamaño del nombre más los apellidos 
(sin contar espacios entre ellos).

- Una propuesta de nombre de usuario, compuesto por la inicial 
del nombre, el primer apellido y la inicial del segundo apellido: ej. Para Marta Delgado Toral sería mdelgadot.

- Una propuesta de nombre de usuario compuesto por las tres 
primeras letras del nombre y delos dos apellidos: ej. mardeltor.

Al pulsar cancelar, el programa termina.

By: Álvaro Rodríguez Molina
 */


let input = prompt(new String("Introduzca su nombre y apellidos: "));

const str = input.split(" ");

const suma = str[0].length + str[1].length + str[2].length;

if (input === null || input === "") {
    alert("Programa terminado");

} else {
    
    alert("Minúsculas: " + input.toLowerCase() + "\nMayúsculas: " + input.toUpperCase());

    alert("Nombre: " + str[0] + "\nApellido1: " + str[1] + "\nApellido2: " + str[2]);

    alert("Tamanño del nombre más los apellidos sin contar los espacios etre ellos: " + suma);

    alert("Propuesta de nombre de usuario (1): " + str[0].charAt(0) + str[1] + str[2].charAt(0));

    alert("Propuesta de nombre de usuario (2): " + str[0].charAt(0) + str[1].substring(0, 3) + str[2].substring(0, 3));
}
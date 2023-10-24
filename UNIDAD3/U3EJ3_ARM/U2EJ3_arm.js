/**
Crea una web, con su correspondiente código externo en js,  que pida al usuario una propuesta de contraseña y  compruebe si cumple con los siguientes requisitos.

Tiene entre 8 y 16 caracteres.
Tiene una letra mayúscula.
Tiene una letra minúscula.
Tiene un número.
Tiene uno de los siguientes valores: guión alto, guión bajo, arroba,  almohadilla, dólar, tanto por ciento o ampersand.
Si cumple con todos los requisitos se considera una contraseña segura, de lo  contrario mostrará que es una contraseña no segura.

Al pulsar cancelar, el programa termina.

By: Álvaro Rodríguez Molina
 */


let contraseña = prompt("Ingrese una propuesta de contraseña: \n\tTiene entre 8 y 16 caracteres.\n\tTiene una letra mayúscula. \n\tTiene una letra minúscula.\n\tTiene un número.\n\tTiene uno de los siguientes valores: guión alto, guión bajo, arroba,  almohadilla, dólar, tanto por ciento o ampersand.");

if (contraseña === null) {
    alert("Programa terminado");
} else {
    const longitud = contraseña.length;
    let cumpleRequisitos = true;

    if (longitud < 8 || longitud > 16) {
        cumpleRequisitos = false;
    }

    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneNumero = false;
    let tieneCaracterEspecial = false;

    for (let i = 0; i < longitud; i++) {
        const caracter = contraseña.charAt(i);

        if (caracter >= 'A' && caracter <= 'Z') {
            tieneMayuscula = true;
        }

        if (caracter >= 'a' && caracter <= 'z') {
            tieneMinuscula = true;
        }

        if (caracter >= '0' && caracter <= '9') {
            tieneNumero = true;
        }

        if (caracter === '-' || caracter === '_' || caracter === '@' || caracter === '#' || caracter === '$' || caracter === '%' || caracter === '&') {
            tieneCaracterEspecial = true;
        }
    }

    if (!tieneMayuscula || !tieneMinuscula || !tieneNumero || !tieneCaracterEspecial) {
        cumpleRequisitos = false;
    }

    if (cumpleRequisitos) {
        alert("Contraseña segura.");
    } else {
        alert("Contraseña no segura. Asegúrese de que cumple con los requisitos.");
    }
}
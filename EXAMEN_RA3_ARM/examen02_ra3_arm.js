let cadena = prompt("Introduce la cadena en el formato tipo_producto|modelo|cantidad@cz");

let partes = cadena.split('|');
let tipoProducto = partes[0];
let modelo = partes[1];
let cantidadZona = partes[2].split('@');
let cantidad = cantidadZona[0];
let zona = cantidadZona[1];

let numeroModelo = modelo.match(/\d+/); // Buscamos dígitos en el modelo

// Mostramos los resultados en el documento HTML
document.write("Tipo de producto: " + tipoProducto + "<br>");
document.write("Letras del modelo: " + modelo.substring(0, modelo.length - numeroModelo[0].length) + "<br>");
document.write("Número del modelo: " + numeroModelo[0] + "<br>");
document.write("Cantidad: " + cantidad + "<br>");
document.write("Zona: " + zona + "<br>");
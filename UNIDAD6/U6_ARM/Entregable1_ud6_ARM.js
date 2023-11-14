
html =document.getElementById("html");

let src = document.getAttribute('src');
let imagen = document.querySelector("centro");


function mostrarImagen(e){

    html.src.imagen.setAttribute('img/html_logo.png')

}

html.addEventListener("click", mostrarImagen)
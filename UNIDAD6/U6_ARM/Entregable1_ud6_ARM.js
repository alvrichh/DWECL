let html = document.getElementById("html");
let bot = document.getElementById("bot");
let js = document.getElementById("js");
let centro = document.getElementById("centro");
//---------------ZOOM--------------
let zoomInButton = document.getElementById("zoomIn");
let zoomOutButton = document.getElementById("zoomOut");
let tamanioActual = 100;
let tamanioMaximo = 500;
let tamanioMinimo = 5;
//----------------COLORES--------------
let cuadrados = document.querySelectorAll('cuadrado');


function mostrarImagen(e) {
    let src = e.target.getAttribute("src"); //el target devuelve el nombre del elemento que roduce el elemento
    centro.setAttribute("src", src);
    //tamanioActual = 100; //para que se resetee el tamaño de la imagen
    aplicarTamanio();
}

function zoomIn(e) {
    tamanioActual += 30;
    if (tamanioActual > tamanioMaximo) {
        tamanioActual = tamanioMaximo;
    }
    aplicarTamanio();
}

function zoomOut(e) {
    tamanioActual -= 30;
    if (tamanioActual < tamanioMinimo) {
        tamanioActual = tamanioMinimo;
    }
    aplicarTamanio();
}

function aplicarTamanio(e) {
    centro.style.width = tamanioActual + "px";
    centro.style.height = tamanioActual + "px";
}

function cambiarColor(e){
    centro.style.border = color;
    
}

html.addEventListener("click", mostrarImagen);
bot.addEventListener("click", mostrarImagen);
js.addEventListener("click", mostrarImagen);
zoomInButton.addEventListener("click", zoomIn);
zoomOutButton.addEventListener("click", zoomOut);

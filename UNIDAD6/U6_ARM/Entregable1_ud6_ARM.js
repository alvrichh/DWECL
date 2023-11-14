let html = document.getElementById("html");
let bot = document.getElementById("bot");
let js = document.getElementById("js");
let centro = document.getElementById("centro");

let zoomInButton = document.getElementById("zoomIn");
let zoomOutButton = document.getElementById("zoomOut");
let tamanioActual = 100;
let tamanioMaximo = 300;
let tamanioMinimo = 5;

function mostrarImagen(e) {
    let src = e.target.getAttribute("src");
    centro.setAttribute("src", src);
    tamanioActual = 100;
    aplicarTamanio();
}

function zoomIn() {
    tamanioActual += 30;
    if (tamanioActual > tamanioMaximo) {
        tamanioActual = tamanioMaximo;
    }
    aplicarTamanio();
}

function zoomOut() {
    tamanioActual -= 30;
    if (tamanioActual < tamanioMinimo) {
        tamanioActual = tamanioMinimo;
    }
    aplicarTamanio();
}

function aplicarTamanio() {
    centro.style.width = tamanioActual + "px";
    centro.style.height = tamanioActual + "px";
}

html.addEventListener("click", mostrarImagen);
bot.addEventListener("click", mostrarImagen);
js.addEventListener("click", mostrarImagen);
zoomInButton.addEventListener("click", zoomIn);
zoomOutButton.addEventListener("click", zoomOut);

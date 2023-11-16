let html = document.getElementById("html");
let bot = document.getElementById("bot");
let js = document.getElementById("js");

//imagen del centro con id="centro"
let centro = document.getElementById("centro");

//Lo utilizo para los colores
let frame = document.querySelector('.frame');


//---------------ZOOM--------------
let zoomInButton = document.getElementById("zoomIn");
let zoomOutButton = document.getElementById("zoomOut");
let tamanioActual = 100;
let tamanioMaximo = 500;
let tamanioMinimo = 5;
//----------------COLORES--------------
let colores = document.querySelectorAll('.colores');



function mostrarImagen(e) {
    let src = e.target.getAttribute("src"); //el target devuelve el nombre del elemento que recibe el elemento
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
    // "+ 'o' -" 30px
    centro.style.width = tamanioActual + "px";
    centro.style.height = tamanioActual + "px";
}


function cambiarColor(e) {
    let colorId = e.target.id;
    switch (colorId) {
        case 'black':
            frame.style.borderColor = 'black';
            break;
        case 'red':
            frame.style.borderColor = 'red';
            break;
        case 'blue':
            frame.style.borderColor = 'blue';
            break;
        case 'yellow':
            frame.style.borderColor = 'yellow';
            break;
        case 'green':
            frame.style.borderColor = 'green';
            break;
        case 'pink':
            frame.style.borderColor = 'pink';
            break;
        default:
            frame.style.borderColor = 'black'; // Cambiar a color por defecto si es necesario
            break;
    }
}

html.addEventListener("click", mostrarImagen);
bot.addEventListener("click", mostrarImagen);
js.addEventListener("click", mostrarImagen);
zoomInButton.addEventListener("click", zoomIn);
zoomOutButton.addEventListener("click", zoomOut);

// Es necesario el for para que recorra el array del querySelectorAll
for (let cuadrado of colores) {
    cuadrado.addEventListener('mouseover', cambiarColor);
}
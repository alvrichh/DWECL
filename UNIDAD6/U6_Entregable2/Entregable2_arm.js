let crearbutton = document.getElementById("crear");
let añadirbutton = document.getElementById("añadir");
let borrarprimerobutton = document.getElementById("borrarprimero");
let borrarultimobutton = document.getElementById("borrarultimo");
let div = document.querySelector("div");

function limpiarlista() {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function crearCampos() {
    let numElementos = document.getElementById("numElementos").value;

    limpiarlista();

    for (let i = 0; i < numElementos; i++) {
        let nuevoInput = document.createElement("input");
        nuevoInput.type = "text";
        nuevoInput.placeholder = "Texto del li " + (i + 1);
        div.appendChild(nuevoInput);
    }
}

function añadirElemento() {
    let inputs = document.querySelectorAll("div input");
    let numElementos = document.getElementById("numElementos").value;

    for (let i = 0; i < numElementos; i++) {
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = inputs[i].value;
        div.appendChild(nuevoLi);
    }
}

function borrarElemento(primero) {
    let elemento = primero ? div.firstElementChild : div.lastElementChild;

    if (elemento) {
        div.removeChild(elemento);
    }
}

crearbutton.addEventListener("click", crearCampos);
añadirbutton.addEventListener("click", añadirElemento);
borrarprimerobutton.addEventListener("click", function () {
    borrarElemento(true);
});
borrarultimobutton.addEventListener("click", function () {
    borrarElemento(false);
});

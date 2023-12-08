let megusta = document.getElementById('mg');
let textolog = document.querySelector("#mg h2");
let nomegusta = document.getElementById('nomg');
let textolog2 = document.querySelector("#nomg h2");

//=============BOTON DE CONTACTAR==========

let contactar = document.querySelector(".boton button")

let formulario = document.querySelector(".inputs");


megusta.addEventListener('click', valorarLike);
nomegusta.addEventListener('click', valorarDislike)


//cambiamos las imagenes y añadimos + 1
function valorarLike(e){
    if (e.target.getAttribute("src")== "img/gusta2.png"){
        textolog.textContent= parseInt(textolog.textContent)+1;
        e.target.src = 'img/gusta.png';
    }
    else{
        textolog.textContent=parseInt(textolog.textContent)-1;
        e.target.src = 'img/gusta2.png';
    }
}
function valorarDislike(e){
    if (e.target.getAttribute("src")== "img/disgusto2.png"){
        textolog2.textContent= parseInt(textolog2.textContent)+1;
        e.target.src = 'img/disgusto.png';
    }
    else{
        textolog2.textContent=parseInt(textolog2.textContent)-1;
        e.target.src = 'img/disgusto2.png';
    }
}

contactar.addEventListener('click', mostrarformulario);

function mostrarformulario(e){
    while(formulario.firstChild){
        formulario.removeChild(formulario.firstChild);
    }
    let nombreInput = document.createElement('input');
    nombreInput.placeholder = "Introduce tu nombre";
    formulario.appendChild(nombreInput);
    let emailInput = document.createElement('input');
    emailInput.placeholder = "Introduce tu email";
    formulario.appendChild(emailInput);
    let botonInput = document.createElement('button');
    botonInput.textContent = "Enviar Datos";
    botonInput.type ="submit";
    formulario.appendChild(botonInput);
}
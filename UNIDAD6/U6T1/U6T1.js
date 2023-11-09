let red = document.getElementById("redbutton");
let yellow = document.getElementById("yellowbutton")
let green = document.getElementById("greenbutton");

let texto = document.querySelector("h1");

function changered(){
    texto.style.color = "red";
}
function changeyellow(){
    texto.style.color = "yellow";
}
function changegreen(){
    texto.style.color = "#00B050";
}

// hay dos maneras de hacer que el boton haga la funcion, con onclick o con addEventListener
yellow.addEventListener('click', changeyellow);
green.addEventListener('click', changegreen);
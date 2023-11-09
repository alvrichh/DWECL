let parrafos = document.getElementsByTagName("p");
let enlaces = document.getElementsByTagName("a");
let resultado = document.getElementById("resultado");

let contador = 0;
for (let i = 0; i < enlaces.length; i++) {
    if (enlaces[i].pathname === "/wiki/Municipio"){
        contador ++;
    }
}

resultado.innerHTML = "Numero de párrafos de la página: " + parrafos.length;
resultado.innerHTML += "<br>El texto del segundo párrafo: " + parrafos[1].textContent;
resultado.innerHTML += "<br>Número de enlaces de la página: " + enlaces.length;
resultado.innerHTML += "<br>Contenido del primer enlace: " + enlaces[0].getAttribute("href");
resultado.innerHTML += "<br>Número de enlaces que apuntan a /wiki/Municipio: " + contador;
resultado.innerHTML += "<br>Numero de enlaces del primer párrafo: " + parrafos[0].getElementsByTagName("a").length;
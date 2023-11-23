let celdas = document.querySelectorAll("td, th");

for (const item of celdas) {
    item.addEventListener('mouseenter', entrando);
    item.addEventListener('mouseleave', saliendo);
}

function entrando(e){

    let parent = e.target.parentElement;

    let hijos = parent.children;
    for (const item of hijos) {
        item.style.backgroundColor = '#F00';
    }
}

function saliendo(e){
    let parent = e.target.parentElement;

    let hijos = parent.children;
    for (const item of hijos) {
        item.style.backgroundColor = "#FFF";
        
    }
}

/**
 * let celdas = document.querySelectorAll("td, th");

for (const item of celdas) {
    item.addEventListener('mouseenter', entrando);
    item.addEventListener('mouseleave', saliendo);
}

function entrando(e) {
    let celda = e.target;
    let rowIndex = celda.parentElement.rowIndex;
    let colIndex = celda.cellIndex;

    // Cambia el color de la fila
    let filas = document.querySelectorAll("tr");
    for (const fila of filas) {
        fila.children[colIndex].style.backgroundColor = '#F00';
    }

    // Cambia el color de la columna
    let columnas = document.querySelectorAll(`td:nth-child(${colIndex + 1})`);
    for (const columna of columnas) {
        columna.style.backgroundColor = '#F00';
    }

    // Cambia el color de las celdas en la fila actual
    let hijos = celda.parentElement.children;
    for (const item of hijos) {
        item.style.backgroundColor = '#F00';
    }
}

function saliendo(e) {
    let celda = e.target;
    let rowIndex = celda.parentElement.rowIndex;
    let colIndex = celda.cellIndex;

    // Restaura el color original de la fila
    let filas = document.querySelectorAll("tr");
    for (const fila of filas) {
        fila.children[colIndex].style.backgroundColor = "#FFF";
    }

    // Restaura el color original de la columna
    let columnas = document.querySelectorAll(`td:nth-child(${colIndex + 1})`);
    for (const columna of columnas) {
        columna.style.backgroundColor = "#FFF";
    }

    // Restaura el color original de las celdas en la fila actual
    let hijos = celda.parentElement.children;
    for (const item of hijos) {
        item.style.backgroundColor = "#FFF";
    }
}

 */

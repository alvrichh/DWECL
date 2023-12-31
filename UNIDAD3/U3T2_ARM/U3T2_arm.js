/**
Realiza una aplicación para gestionar la información de una escuela de tenis. Para ello se va a construir una web con información de la escuela (tarifas, horarios, etc) y además, deberá aparecer una opción "Socios" para la gestión de socios del club, a la cual podrá acceder el administrador de la web para realizar determinadas operaciones de administración. El responsable te ha facilitado una lista con los datos que deben almacenarse de cada socio, que son el número de socio, DNI, nombre, apellidos, fecha de nacimiento y localidad.
Operaciones con datos de socios:

Alta de un nuevo socio - Se pedirán todos sus datos
Baja de un socio (por el número de socio o por DNI).
Modificar la localidad del socio.
Incluye una función que, dada la fecha de nacimiento del socio (se la pasas por parámetro) devuelva (return) el nombre de la categoría a la que pertenece. Las categorías serán las siguientes:

Senior: 19 o mas años
Juvenil: 16, 17 y 18 años
Cadetes: 14 y 15 años
Infantil: 12 y 13 años
Alevín: 10 y 11 años
Benjamín: 8 y 9 años
Mostrar todos los datos de los socios (utilizando document.write) y creando una estructura de tabla. Además, la tabla incluirá una última columna llamada Categoría, que mostrará la categoría a la que pertenece el socio.
Buscar un socio a partir de su DNI o de su nombre y apellidos y mostrar sus datos.

Buscar todos los socios de una categoría (debes crear una función que, dada una categoría, devuelva un año de nacimiento; y después, mostrar todos los socios que nacieron ese año).
Dada una localidad, mostrar una lista con todos los socios de esa localidad.
En una aplicación real, todos estos datos de socios estarían en una base de datos en el backend. Como no tenemos herramientas para hacerlo en este ejercicio, utiliza un array como "base de datos".

Para trabajar con objetos, crea un objeto que sea Socio y piensa qué métodos estarán dentro del objeto y cuáles serán funciones externas.

GUARDA LOS ARCHIVOS, SIGUIENDO LA REGLA DE NOMBRES QUE UTILIZAMOS PARA TODAS LAS TAREAS.

By: Álvaro Rodríguez Molina

 */

let socios = [];

function Socio() {
    this.numeroSocio = "";
    this.dni = "";
    this.nombre = "";
    this.apellidos = "";
    this.fechaNacimiento = "";
    this.localidad = "";
}

function Socio(numeroSocio, dni, nombre, apellidos, fechaNacimiento, localidad) {
    this.numeroSocio = numeroSocio;
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.localidad = localidad;

}

// Lista de socios por defecto
socios.push(new Socio("1", "12345678A", "Juan", "Pérez", "1990-05-15", "Sevilla"));
socios.push(new Socio("2", "87654321B", "María", "González", "2005-02-20", "Madrid"));
socios.push(new Socio("3", "98765432C", "Pedro", "López", "2008-09-10", "Barcelona"));
socios.push(new Socio("4", "45678901D", "Ana", "Martínez", "2010-11-03", "Valencia"));
socios.push(new Socio("5", "56789012E", "Luis", "Sánchez", "2015-07-25", "Málaga"));

function altaSocio() {
    let numeroSocio = prompt("Ingrese el número de socio:");
    let dni = prompt("Ingrese el DNI:");
    let nombre = prompt("Ingrese el nombre:");
    let apellidos = prompt("Ingrese los apellidos:");
    let fechaNacimiento = prompt("Ingrese la fecha de nacimiento (YYYY-MM-DD):");
    let localidad = prompt("Ingrese la localidad:");
    socios.push({ numeroSocio, dni, nombre, apellidos, fechaNacimiento, localidad });
    alert("Socio dado de alta correctamente.");
}

function bajaSocio() {
    let option = prompt("Ingrese el número de socio o DNI del socio que desea dar de baja:");
    let index = -1;

    for (let i = 0; i < socios.length; i++) {
        if (socios[i].numeroSocio === option || socios[i].dni === option) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        socios.splice(index, 1);
        alert("Socio dado de baja correctamente.");
    } else {
        alert("Socio no encontrado.");
    }
}

function modificarLocalidad() {
    let numeroSocio = prompt("Ingrese el número de socio del socio cuya localidad desea modificar:");
    let nuevaLocalidad = prompt("Ingrese la nueva localidad:");

    for (let i = 0; i < socios.length; i++) {
        if (socios[i].numeroSocio === numeroSocio) {
            socios[i].localidad = nuevaLocalidad;
            alert("Localidad modificada correctamente.");
            return;
        }
    }
    alert("Socio no encontrado.");
}

function calcularCategoria(fechaNacimiento) {
    let today = new Date();
    let birthDate = new Date(fechaNacimiento);
    let anyo = today.getFullYear() - birthDate.getFullYear();

    if (anyo >= 19) {
        return "Senior";
    } else if (anyo >= 16) {
        return "Juvenil";
    } else if (anyo >= 14) {
        return "Cadetes";
    } else if (anyo >= 12) {
        return "Infantil";
    } else if (anyo >= 10) {
        return "Alevín";
    } else if (anyo >= 8) {
        return "Benjamín";
    } else {
        return "Menor de 8 años";
    }
}

function mostrarSocios() {
    document.write(`
    <h2>Lista de Socios</h2>
    <table border='1'>
        <tr>
            <th>Número de Socio</th>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Fecha de Nacimiento</th>
            <th>Localidad</th>
            <th>Categoría</th>
        </tr>`);

    for (let socio of socios) {
        let categoria = calcularCategoria(socio.fechaNacimiento);
        document.write(
            `<tr>
                <td>${socio.numeroSocio}</td>
                <td>${socio.dni}</td>
                <td>${socio.nombre}</td>
                <td>${socio.apellidos}</td>
                <td>${socio.fechaNacimiento}</td>
                <td>${socio.localidad}</td>
                <td>${categoria}</td>
            </tr>`
        );
    }

    document.write("</table>");
}
function mostrarSocioFiltrado(array) {
    document.write(`
    <h2>Lista de Socios</h2>
    <table border='1'>
        <tr>
            <th>Número de Socio</th>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Fecha de Nacimiento</th>
            <th>Localidad</th>
            <th>Categoría</th>
        </tr>`);

    for (let socio of array) {
        let categoria = calcularCategoria(socio.fechaNacimiento);
        document.write(
            `<tr>
                <td>${socio.numeroSocio}</td>
                <td>${socio.dni}</td>
                <td>${socio.nombre}</td>
                <td>${socio.apellidos}</td>
                <td>${socio.fechaNacimiento}</td>
                <td>${socio.localidad}</td>
                <td>${categoria}</td>
            </tr>`
        );
    }

    document.write("</table>");
}


function buscarPorDNI() {
    let dniBuscado = prompt("Introduce el DNI del socio que deseas buscar:");

    let socioEncontrado = socios.find((socio) => socio.dni === dniBuscado);

    if (socioEncontrado) {
        mostrarSocioFiltrado(socioEncontrado);
    } else {
        alert("Socio no encontrado.");
    }
}


function buscarPorLocalidad() {
    let localidadBuscada = prompt("Introduce la localidad:");

    let sociosEncontrados = socios.filter((socio) => socio.localidad.toLowerCase() === localidadBuscada.toLowerCase());

    console.log(sociosEncontrados);
    if (sociosEncontrados.length > 0) {
        mostrarSocioFiltrado(sociosEncontrados);
    } else {
        alert("No se encontraron socios en esa localidad.");
    }
}

function buscarPorCategoria() {
    let categoriaBuscada = prompt("Introduce la categoría (Senior, Juvenil, Cadetes, Infantil, Alevín, Benjamín):");
    
    // Filtrar los socios por la categoría buscada
    let socioEncontrado = socios.filter(socio => calcularCategoria(socio.fechaNacimiento) === categoriaBuscada);
    
    if (socioEncontrado.length > 0) {
        mostrarSocioFiltrado(socioEncontrado);
    } else {
        alert(`No se encontraron socios en la categoría ${categoriaBuscada}.`);
    }
}

function seleccionarOperacion() {
    let opcion = prompt("Seleccione una operación:\n1. Alta de Socio\n2. Baja de Socio\n3. Modificar Localidad\n4. Mostrar Socios\n5. Buscar Socio por DNI\n6. Buscar por Categoría\n7. Buscar por Localidad");
    if (opcion === null) {
        alert("Cancelado");
    } else {
        switch (opcion) {
            case "1":
                altaSocio();
                seleccionarOperacion();
                break;
            case "2":
                bajaSocio();
                seleccionarOperacion();
                break;
            case "3":
                modificarLocalidad();
                seleccionarOperacion();
                break;
            case "4":
                mostrarSocios();
                break;
            case "5":
                buscarPorDNI();
                break;
            case "6":
                buscarPorCategoria();
                break;
            case "7":
                buscarPorLocalidad();
                seleccionarOperacion();
                break;
            default:
                alert("Operación no válida.");
                seleccionarOperacion();
        }
    }
}


// Llama a esta función para que el usuario seleccione una operación al cargar la página.
seleccionarOperacion();

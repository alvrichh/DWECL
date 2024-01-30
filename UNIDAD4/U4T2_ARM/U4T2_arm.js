// Eventos para llamar a las funciones de validación al perder el foco en los campos correspondientes
document.getElementById('nombre').addEventListener('blur', validarNombreApellido);
document.getElementById('apellidos').addEventListener('blur', validarNombreApellido);
document.getElementById('edad').addEventListener('blur', validarEdad);
document.getElementById('nif').addEventListener('blur', validarNIF);
document.getElementById('email').addEventListener('blur', validarEmail);
document.getElementById('provincia').addEventListener('blur', validarProvincia);
document.getElementById('fecha').addEventListener('blur', validarFecha);
document.getElementById('telefono').addEventListener('blur', validarTelefono);
document.getElementById('hora').addEventListener('blur', validarHora);

// Evento para pedir confirmación antes de enviar el formulario
document.getElementById('formulario').addEventListener('submit', function (event) {
  // Validar los campos antes de enviar el formulario
  validarNombreApellido();
  validarEdad();
  validarNIF();
  validarEmail();
  validarProvincia();
  validarFecha();
  validarTelefono();
  validarHora();

  // Si hay errores, cancelar el envío del formulario
  if (document.getElementById('errores').innerHTML !== '') {
      event.preventDefault();
  } else {
      // Si no hay errores, pedir confirmación de envío
      confirmarEnvio();
  }
});
// Función para convertir a mayúsculas los campos NOMBRE y APELLIDOS
function convertirAMayusculas(element) {
  element.value = element.value.toUpperCase();
}
// Evento para llamar a la función de validación al perder el foco en los campos NOMBRE y APELLIDOS
document.getElementById('nombre').addEventListener('blur', function () {
  convertirAMayusculas(this);
});

document.getElementById('apellidos').addEventListener('blur', function () {
  convertirAMayusculas(this);
});

// Función para validar los campos NOMBRE y APELLIDOS
function validarNombreApellido() {
  let nombre = document.getElementById('nombre');
  let apellidos = document.getElementById('apellidos');
  let erroresContainer = document.getElementById('errores');

  // Restaurar estilo
  nombre.classList.remove('error');
  apellidos.classList.remove('error');
  erroresContainer.innerHTML = '';

  // Validar NOMBRE
  if (nombre.value.trim() === '') {
      erroresContainer.innerHTML += '* El campo Nombre es obligatorio.<br>';
      nombre.classList.add('error');
  }

  // Validar APELLIDOS
  if (apellidos.value.trim() === '') {
      erroresContainer.innerHTML += '* El campo Apellidos es obligatorio.<br>';
      apellidos.classList.add('error');
  }

  // Si hay errores, poner el foco en el primer campo con error
  if (erroresContainer.innerHTML !== '') {
      if (nombre.value.trim() === '') {
          nombre.focus();
      } else {
          apellidos.focus();
      }
  }
}

// Función para validar la EDAD
function validarEdad() {
  let edad = document.getElementById('edad');
  let erroresContainer = document.getElementById('errores');

  // Restaurar estilo
  edad.classList.remove('error');
  erroresContainer.innerHTML = '';

  // Validar EDAD
  let edadValue = parseInt(edad.value, 10);
  if (isNaN(edadValue) || edadValue < 0 || edadValue > 105) {
      erroresContainer.innerHTML += '* La Edad debe ser un valor numérico entre 0 y 105.<br>';
      edad.classList.add('error');

      // Poner el foco en el campo EDAD
      edad.focus();
  }
}

// Función para validar el NIF
function validarNIF() {
  let nif = document.getElementById('nif');
  let erroresContainer = document.getElementById('errores');

  // Restaurar estilo
  nif.classList.remove('error');
  erroresContainer.innerHTML = '';

  // Validar NIF con expresión regular
  let nifRegex = /^[0-9]{8}-[a-zA-Z]$/;
  if (!nifRegex.test(nif.value)) {
      erroresContainer.innerHTML += '* El NIF debe tener 8 números, un guión y una letra.<br>';
      nif.classList.add('error');

      // Poner el foco en el campo NIF
      nif.focus();
  }
}

// Función para validar el E-MAIL
function validarEmail() {
  let email = document.getElementById('email');
  let erroresContainer = document.getElementById('errores');

  // Restaurar estilo
  email.classList.remove('error');
  erroresContainer.innerHTML = '';

  // Validar E-MAIL con expresión regular
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
      erroresContainer.innerHTML += '* El formato del E-mail no es válido.<br>';
      email.classList.add('error');

      // Poner el foco en el campo E-MAIL
      email.focus();
  }
}

// Función para validar la PROVINCIA
function validarProvincia() {
  let provincia = document.getElementById('provincia');
  let erroresContainer = document.getElementById('errores');

  // Restaurar estilo
  provincia.classList.remove('error');
  erroresContainer.innerHTML = '';

  // Validar PROVINCIA
  if (provincia.value === '0') {
      erroresContainer.innerHTML += '* Debe seleccionar una provincia.<br>';
      provincia.classList.add('error');

      // Poner el foco en el campo PROVINCIA
      provincia.focus();
  }
}

// Función para validar la FECHA
function validarFecha() {
  let fecha = document.getElementById('fecha');
  let erroresContainer = document.getElementById('errores');

  // Restaurar estilo
  fecha.classList.remove('error');
  erroresContainer.innerHTML = '';

  // Validar FECHA con expresión regular
  let fechaRegex = /^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/]\d{4}$/;
  if (!fechaRegex.test(fecha.value)) {
      erroresContainer.innerHTML += '* El formato de la Fecha no es válido.<br>';
      fecha.classList.add('error');

      // Poner el foco en el campo FECHA
      fecha.focus();
  }
}

// Función para validar el TELEFONO
function validarTelefono() {
  let telefono = document.getElementById('telefono');
  let erroresContainer = document.getElementById('errores');

  // Restaurar estilo
  telefono.classList.remove('error');
  erroresContainer.innerHTML = '';

  // Validar TELEFONO con expresión regular
  let telefonoRegex = /^\d{9}$/;
  if (!telefonoRegex.test(telefono.value)) {
      erroresContainer.innerHTML += '* El formato del Teléfono no es válido.<br>';
      telefono.classList.add('error');

      // Poner el foco en el campo TELEFONO
      telefono.focus();
  }
}

// Función para validar la HORA
function validarHora() {
  let hora = document.getElementById('hora');
  let erroresContainer = document.getElementById('errores');

  // Restaurar estilo
  hora.classList.remove('error');
  erroresContainer.innerHTML = '';

  // Validar HORA con expresión regular
  let horaRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (!horaRegex.test(hora.value)) {
      erroresContainer.innerHTML += '* El formato de la Hora no es válido.<br>';
      hora.classList.add('error');

      // Poner el foco en el campo HORA
      hora.focus();
  }
}

// Función para pedir confirmación de envío del formulario
function confirmarEnvio() {
  let confirmacion = confirm('¿Estás seguro de enviar el formulario?');
  if (confirmacion) {
      // Aquí podrías realizar el envío del formulario, por ejemplo, utilizando AJAX o simplemente permitiendo que se envíe de forma tradicional.
      document.getElementById('formulario').submit();
  } else {
      // Cancelar el envío
      alert('Envío cancelado.');
  }
}
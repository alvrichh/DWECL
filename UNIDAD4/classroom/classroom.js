document.addEventListener('DOMContentLoaded', function () {
    // Function to convert NOMBRE and APELLIDOS to uppercase on blur
    function convertToUpperCase(element) {
      element.value = element.value.toUpperCase();
    }
  
    // Function to validate NOMBRE and APELLIDOS
    function validateName(element, label) {
      const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s']+$/;
      if (!nameRegex.test(element.value)) {
        displayError(label, 'El campo solo debe contener letras y espacios.');
        return false;
      }
      return true;
    }
  
    // Function to validate EDAD
    function validateAge(element, label) {
      const age = parseInt(element.value, 10);
      if (isNaN(age) || age < 0 || age > 105) {
        displayError(label, 'La edad debe ser un número entre 0 y 105.');
        return false;
      }
      return true;
    }
  
    // Function to validate NIF
    function validateNIF(element) {
      const nifRegex = /^\d{8}-[a-zA-Z]$/;
      if (!nifRegex.test(element.value)) {
        displayError(element, 'El NIF debe tener 8 números, un guión y una letra.');
        return false;
      }
      return true;
    }
  
    // Function to validate E-MAIL
    function validateEmail(element) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(element.value)) {
        displayError(element, 'Formato de correo electrónico incorrecto.');
        return false;
      }
      return true;
    }
  
    // Function to validate PROVINCIAS
    function validateProvince(element, label) {
      if (element.value === '0') {
        displayError(label, 'Seleccione una provincia.');
        return false;
      }
      return true;
    }
  
    // Function to validate FECHA
    function validateFecha(element) {
      // Explanation of the regular expression:
      // ^ - Start of the string
      // (0[1-9]|[12][0-9]|3[01]) - Day: 01-09, 10-29, 30-31
      // [/|-] - Separator: / or -
      // (0[1-9]|1[0-2]) - Month: 01-09, 10-12
      // [/|-] - Separator: / or -
      // \d{4} - Year: Four digits
      // $ - End of the string
      const fechaRegex = /^(0[1-9]|[12][0-9]|3[01])[/|-](0[1-9]|1[0-2])[/|-]\d{4}$/;
      if (!fechaRegex.test(element.value)) {
        displayError(element, 'Formato de fecha incorrecto. Use dd/mm/aaaa o dd-mm-aaaa.');
        return false;
      }
      return true;
    }
  
    // Function to validate TELEFONO
    function validateTelefono(element) {
      const telefonoRegex = /^\d{9}$/;
      if (!telefonoRegex.test(element.value)) {
        displayError(element, 'El teléfono debe tener 9 dígitos.');
        return false;
      }
      return true;
    }
  
    // Function to validate HORA
    function validateHora(element) {
      // Explanation of the regular expression:
      // ^ - Start of the string
      // ([01]\d|2[0-3]) - Hours: 00-09, 10-23
      // : - Separator
      // [0-5]\d - Minutes: 00-59
      // $ - End of the string
      const horaRegex = /^([01]\d|2[0-3]):[0-5]\d$/;
      if (!horaRegex.test(element.value)) {
        displayError(element, 'Formato de hora incorrecto. Use hh:mm.');
        return false;
      }
      return true;
    }
  
    // Function to display error message, mark label with * in red, and focus on the input
    function displayError(element, errorMessage) {
      const erroresDiv = document.getElementById('errores');
      erroresDiv.innerHTML = errorMessage;
      
      const label = document.querySelector(`label[for="${element.id}"]`);
      label.innerHTML = `${label.innerHTML} <span style="color: red;">*</span>`;
      
      element.focus();
    }
  
    // Event listener for NOMBRE field blur
    const nombreField = document.getElementById('nombre');
    nombreField.addEventListener('blur', function () {
      convertToUpperCase(this);
      validateName(this, 'Nombre:');
    });
  
    // Event listener for APELLIDOS field blur
    const apellidosField = document.getElementById('apellidos');
    apellidosField.addEventListener('blur', function () {
      convertToUpperCase(this);
      validateName(this, 'Apellidos:');
    });
  
    // Event listener for EDAD field blur
    const edadField = document.getElementById('edad');
    edadField.addEventListener('blur', function () {
      validateAge(this, 'Edad:');
    });
  
    // Event listener for NIF field blur
    const nifField = document.getElementById('nif');
    nifField.addEventListener('blur', function () {
      validateNIF(this);
    });
  
    // Event listener for E-MAIL field blur
    const emailField = document.getElementById('email');
    emailField.addEventListener('blur', function () {
      validateEmail(this);
    });
  
    // Event listener for PROVINCIA field blur
    const provinciaField = document.getElementById('provincia');
    provinciaField.addEventListener('blur', function () {
      validateProvince(this, 'Provincia:');
    });
  
    // Event listener for FECHA field blur
    const fechaField = document.getElementById('fecha');
    fechaField.addEventListener('blur', function () {
      validateFecha(this);
    });
  
    // Event listener for TELEFONO field blur
    const telefonoField = document.getElementById('telefono');
    telefonoField.addEventListener('blur', function () {
      validateTelefono(this);
    });
  
    // Event listener for HORA field blur
    const horaField = document.getElementById('hora');
    horaField.addEventListener('blur', function () {
      validateHora(this);
    });
  
    // Event listener for form submission
    const form = document.getElementById('formulario');
    form.addEventListener('submit', function (event) {
      // Check if all fields are valid before submitting
      if (
        !validateName(nombreField, 'Nombre:') ||
        !validateName(apellidosField, 'Apellidos:') ||
        !validateAge(edadField, 'Edad:') ||
        !validateNIF(nifField) ||
        !validateEmail(emailField) ||
        !validateProvince(provinciaField, 'Provincia:') ||
        !validateFecha(fechaField) ||
        !validateTelefono(telefonoField) ||
        !validateHora(horaField)
      ) {
        event.preventDefault(); // Prevent form submission
      } else {
        // Ask for confirmation before submitting
        const confirmSubmit = confirm('¿Desea enviar el formulario?');
        if (!confirmSubmit) {
          event.preventDefault(); // Cancel form submission
        }
      }
    });
  });
  
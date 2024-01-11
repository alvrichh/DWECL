let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  let errores = false;

  for (let i = 0; i < formulario.elements.length; i++) {
    let elemento = formulario.elements[i];

    if (elemento.type === "text" || elemento.type === "email") {
      if (elemento.value === "") {
        document.getElementById("errores").innerHTML = "* Debe completar todos los campos.";
        document.getElementById(elemento.name + "Label").innerHTML = elemento.name + ": *";
        elemento.focus();
        errores = true;
      } else {
        document.getElementById(elemento.name + "Label").innerHTML = elemento.name + ":";
      }
    }

    if (elemento.type === "number") {
      if (isNaN(elemento.value) || elemento.value < 0 || elemento.value > 105) {
        document.getElementById("errores").innerHTML = "* La edad debe ser un número entre 0 y 105.";
        document.getElementById(elemento.name + "Label").innerHTML = elemento.name + ": *";
        elemento.focus();
        errores = true;
      } else {
        document.getElementById(elemento.name + "Label").innerHTML = elemento.name + ":";
      }
    }

    if (elemento.type === "tel") {
      let regex = /^[0-9]{9}$/;

      if (!regex.test(elemento.value)) {
        document.getElementById("errores").innerHTML = "* El número de teléfono debe contener 9 dígitos.";
        document.getElementById(elemento.name + "Label").innerHTML = elemento.name + ": *";
        elemento.focus();
        errores = true;
      } else {
        document.getElementById(elemento.name + "Label").innerHTML = elemento.name + ":";
      }
    }

    if (elemento.type === "date") {
      let regex = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;

      if (!regex.test(elemento.value)) {
        document.getElementById("errores").innerHTML = "* La fecha debe tener el formato dd/mm/aaaa o dd-mm-aaaa.";
        document.getElementById(elemento.name + "Label").innerHTML = elemento.name + ": *";
        elemento.focus();
        errores = true;
      } else {
        document.getElementById(elemento.name + "Label").innerHTML = elemento.name + ":";
      }
    }

    if (elemento.type === "email") {
      let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!regex.test(elemento.value)) {
        document.getElementById("errores").innerHTML = "* El E-MAIL debe tener un formato correcto.";
        document.getElementById(elemento.name + "Label").innerHTML = elemento.name + ": *";
        elemento.focus();
        errores = true;
      } else {
        document.getElementById(elemento.name + "Label").innerHTML = elemento.name + ":";
      }
    }

    if (elemento.type === "select-one") {
      if (elemento.value === "0") {
        document.getElementById("errores").innerHTML = "* Debe seleccionar una provincia.";
        document.getElementById(elemento.name + "Label").innerHTML = elemento.name + ": *";
        elemento.focus();
        errores = true;
      } else {
        document.getElementById(elemento.name + "Label").innerHTML = elemento.name + ":";
      }
    }

    if (elemento.type === "time") {
      let regex = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;

      if (!regex.test(elemento.value)) {
        document.getElementById("errores").innerHTML = "* La hora debe seguir el patrón hh:mm.";
        document.getElementById(elemento.name + "Label").innerHTML = elemento.name + ": *";
        elemento.focus();
        errores = true;
      } else {
        document.getElementById(elemento.name + "Label").innerHTML = elemento.name + ":";
      }
    }
  }

  if (!errores) {
    if (confirm("¿Estás seguro de que deseas enviar el formulario?")) {
      formulario.submit();
    }
  } else {
    alert("Hay errores en el formulario. Por favor, corrígelos antes de enviar.");
  }
});

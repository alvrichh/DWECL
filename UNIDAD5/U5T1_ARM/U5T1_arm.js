function setCookies() {
  const expirationDate = new Date("December 31, 2024 23:59:59");

  document.cookie = `usuario=alvrich; expires=${expirationDate.toUTCString()}`;
  document.cookie = `edad=22; expires=${expirationDate.toUTCString()}`;
  document.cookie = `curso=DAW2; expires=${expirationDate.toUTCString()}`;
}

function getCookie(name) {
  const cookies = document.cookie.split(';').map(cookie => cookie.trim());

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');

    if (cookieName === name) {
      return cookieValue;
    }
  }

  return null;
}

// Llamamos a setCookies para establecer las cookies
setCookies();

// Probamos la función getCookie para obtener los valores
const nombreUsuario = getCookie('usuario');
const edadUsuario = getCookie('edad');
const cursoUsuario = getCookie('curso');

console.log('Nombre de usuario:', nombreUsuario);
console.log('Edad de usuario:', edadUsuario);
console.log('Curso del usuario:', cursoUsuario);

var elemento = document.querySelector('.mensaje-muneco p:first-child');
var textarea = document.querySelector('#ingreso-texto');
var imagenSalida = document.querySelector('.rectangulo-muneco img');
var textoSalida = document.querySelector('.texto-encriptado');

var regex = /[A-ZÁÉÍÓÚÜ]/;
//var texto = textarea.value;

function encriptacion(texto) {
  alert('encriptado......................');

  // Reemplazar la letra "e" por "enter"
  texto = texto.replace(/e/gi, 'enter');

  // Reemplazar la letra "i" por "imes"
  texto = texto.replace(/i/gi, 'imes');

  // Reemplazar la letra "a" por "ai"
  texto = texto.replace(/a/gi, 'ai');

  // Reemplazar la letra "o" por "ober"
  texto = texto.replace(/o/gi, 'ober');

  // Reemplazar la letra "u" por "ufat"
  texto = texto.replace(/u/gi, 'ufat');

  imagenSalida.style.display = 'none';

  textoSalida.innerText = texto;

  textoSalida.style.display = 'block';

  alert(texto);

}

function validacion() {
  var texto = textarea.value;
  alert(texto);
  if (regex.test(texto)) {
    alert('El texto contiene mayúsculas o acentos.');
    var textoMinusculas = texto.toLowerCase();
    var textoSinAcentos = textoMinusculas.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    textarea.value = textoSinAcentos;
    encriptacion(textoSinAcentos);
  } else {
    alert('El texto no contiene mayúsculas ni acentos.');
    encriptacion(texto);
  }
}

function encriptar() {
  if (textarea.value === '') {
    elemento.style.display = 'block';
    return;
  } else {
    elemento.style.display = 'none';
    alert("presionado boton encriptar");
    validacion();
  }
}

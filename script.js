var elemento = document.querySelector('.mensaje-muneco p:first-child');
var textarea = document.querySelector('#ingreso-texto');

var regex = /[A-ZÁÉÍÓÚÜ]/;
//var texto = textarea.value;

function encriptacion() {
  alert('encriptado......................');
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
  } else {
    elemento.style.display = 'none';
    alert("presionado boton encriptar");
    validacion();
  }
}

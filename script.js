var elemento = document.querySelector('.mensaje-muneco p:first-child');
var textarea = document.querySelector('#ingreso-texto');
var imagenSalida = document.querySelector('.rectangulo-muneco img');
var textoSalida = document.querySelector('.texto-encriptado');

var regex = /[A-ZÁÉÍÓÚÜ]/;

function encriptacion(texto) {

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
  document.querySelector('.mensaje-muneco p:last-child').style.display = 'none';
  document.querySelector('.rectangulo-muneco button').style.display = 'block';

  textoSalida.innerText = texto;

  textoSalida.style.display = 'block';

}

function validacion() {
  var texto = textarea.value;

  if (regex.test(texto)) {
    alert('El texto contiene mayúsculas o acentos, lo corrijo');
    var textoMinusculas = texto.toLowerCase();
    var textoSinAcentos = textoMinusculas.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    textarea.value = textoSinAcentos;
    encriptacion(textoSinAcentos);
  } else {
    encriptacion(texto);
  }
}

function encriptar() {
  if (textarea.value === '') {
    elemento.style.display = 'block';
    document.querySelector('.mensaje-muneco p:last-child').style.display = 'block';
    return;
  } else {
    elemento.style.display = 'none';
    validacion();
  }
}

function copiar() {
  textarea.innerText = textoSalida.validacion;
  textarea.value = textoSalida.value;
  portapapeles();

}

function portapapeles(){
  const texto = textoSalida.value;
  navigator.clipboard.writeText(texto)
    .then(() => {
      console.log('Texto copiado al portapapeles: ' + texto);
    })
    .catch((error) => {
      console.error('Error al copiar al portapapeles: ', error);
    });
}

function desencriptar(){
  // Texto encriptado
var textoEncriptado = textarea.value;

// Reemplazar la letra "enter" por "e"
textoEncriptado = textoEncriptado.replace(/enter/gi, 'e');

// Reemplazar la letra "imes" por "i"
textoEncriptado = textoEncriptado.replace(/imes/gi, 'i');

// Reemplazar la letra "ai" por "a"
textoEncriptado = textoEncriptado.replace(/ai/gi, 'a');

// Reemplazar la letra "ober" por "o"
textoEncriptado = textoEncriptado.replace(/ober/gi, 'o');

// Reemplazar la letra "ufat" por "u"
textoEncriptado = textoEncriptado.replace(/ufat/gi, 'u');

// Texto desencriptado
textoSalida.innerText = textoEncriptado;

}
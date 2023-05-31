var elemento = document.querySelector('.mensaje-muneco p:first-child');
var textarea = document.querySelector('textarea');

// Expresión regular para verificar si el texto contiene mayúsculas o acentos
var regex = /[A-ZÁÉÍÓÚÜ]/;
var texto = textarea.value;



function encriptando() {
     var textarea = document.querySelector('textarea');
     var regex = /[A-ZÁÉÍÓÚÜ]/;
     var texto = textarea.value;

    alert('procesando encriptando');
    if (regex.test(texto)) {
        // El texto contiene mayúsculas o acentos
        alert('El texto contiene mayúsculas o acentos.');
        // Convertir el texto a minúsculas
        var textoMinusculas = texto.toLowerCase();
        // Remover los acentos del texto
        var textoSinAcentos = textoMinusculas.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        textarea.value = textoSinAcentos;
      } else {
        // El texto no contiene mayúsculas ni acentos
        alert('El texto no contiene mayúsculas ni acentos.');
      }
}


function encriptar() {
    if (textarea.value === '') {
        elemento.style.display = 'block';
      } else {
        // rutina para encriptar
        elemento.style.display = 'none';
        alert("llamando encriptando");
        encriptando();
      }

    

}






const entrada = document.querySelector('#texto');
const salida = document.querySelector('#texto2');
    
entrada.addEventListener('input', () => {
    const texto = entrada.value;
    salida.textContent = texto;

    if (texto.length > 19) {
        salida.style.backgroundColor = 'red'; // color de fondo si pasa los 20 caracteres
    } else {
        salida.style.backgroundColor = ''; // vuelve al fondo normal
    }
});
import { mostrarSeleccion } from './funciones 23.js';

const radios = document.querySelectorAll('input[name="lenguaje"]');

radios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    mostrarSeleccion(e.target.value);
  });
});

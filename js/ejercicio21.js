import { actualizarTexto } from './funciones21.js';

const input = document.getElementById('entrada');

input.addEventListener('input', (evento) => {
  actualizarTexto(evento.target.value);
});

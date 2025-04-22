import { actualizarTexto } from './funciones.js';

const input = document.getElementById('entrada');

input.addEventListener('input', (evento) => {
  actualizarTexto(evento.target.value);
});

export function mostrarSeleccion(valor) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Seleccionaste: ${valor}`;
    console.log("Seleccionaste:", valor);
  }
  
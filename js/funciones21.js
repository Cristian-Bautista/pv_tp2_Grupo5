export function actualizarTexto(valor) {
    const salida = document.getElementById('salida');
    salida.textContent = valor || "Tu texto aparecerá aquí...";
  }
  
function actualizarParrafo(){
    const parrafoIngresado=document.getElementById('parrafo').value;
    const parrafoactual=document.getElementById('verparrafo');
    if (parrafoIngresado.trim() !== "") {
        parrafoactual.textContent = parrafoIngresado;
      } else {
        parrafoactual.textContent = "";
      }
}
const boton=document.getElementById('cambiar');
boton.addEventListener('click',actualizarParrafo);

export const a=() => {
const numero=document.getElementById('numero').value;

    alert(`El area es de: ${(numero*Math.PI)} metros`);
   
}

    document.getElementById('confirmar').addEventListener('click',a);
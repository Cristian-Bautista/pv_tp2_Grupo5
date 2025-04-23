export const sacar=() => {
    const numero=document.getElementById('numero').value; 
    if (numero%2==0) {
        alert(`El rendimiento es de: ${(numero/2)} par`);
    }
    else {
        alert(`El rendimiento es de: ${(numero/2)} impar`);
    }
   
}

    document.getElementById('verificar').addEventListener('click',sacar);
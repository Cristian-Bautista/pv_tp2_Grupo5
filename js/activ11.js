export const calcula=() => {
    const kilometro=document.getElementById('kilometro').value;
    const litro=document.getElementById('litro').value; 
    alert(`El rendimiento es de: ${(kilometro/litro)} km/litro`);
   
}

    document.getElementById('calcular').addEventListener('click',calcula);



export const mostrar=() => {
    const nombre=document.querySelector('nombre').value; 
    const apellido=document.querySelector('apellido').value;
    const libreta=document.querySelector('libreta').value;

alert(`Los datos son: ${nombre} ${apellido} ${libreta}`);
   
}

    document.getElementById('datos').addEventListener('click',mostrar);
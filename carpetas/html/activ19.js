export const most=() => {
    const nombre=document.querySelector('#nombre'); 
    const apellido=document.querySelector('#apellido');
    const libreta=document.querySelector('#libreta');

alert(`Los datos son: ${nombre} ${apellido} ${libreta}`);
   
}

    document.getElementById('datos').addEventListener('click',most);
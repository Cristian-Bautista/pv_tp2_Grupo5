export const most=() => {

    const nombre=document.querySelector('#nombre').value;
    const apellido=document.querySelector('#apellido').value;
    const libreta=document.querySelector('#libreta').value;

alert(`Los datos son: 
    Nombre: ${nombre}
    Apellido: ${apellido} 
    Libreta Universitaria: APU${libreta}`);
   
}

document.getElementById('datos').addEventListener('click',most);
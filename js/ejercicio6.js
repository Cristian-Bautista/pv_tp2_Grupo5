const edad=[10,14,20,25,18,7,15,27];
let contador=0;
let suma=0;
edad.forEach((i)=>{
    contador++;
    suma += i;
})
console.log('Activadad 6');
console.log(`El prommedio de las edad es: ${suma/contador}`)

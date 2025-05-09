let numero1=5;
let numero2=7;
console.log('Activadad 8');
function calcularMayor(numero1, numero2) {
    if (numero1 > numero2) {
      console.log('El número mayor es: ' + numero1);
    } else if (numero2 > numero1) {
      console.log('El número mayor es: ' + numero2);
    } else {
      console.log('Ambos números son iguales.');
    }
}
calcularMayor(numero1,numero2);
const nombres=["Valeria","Mateo","Camila","Santiago","Isabella","Nicolás"];
let nombreMasLargo = "";
nombres.forEach((i) => {
  if (i.length > nombreMasLargo.length) {
    nombreMasLargo = i;
  }
});
console.log('Activadad 7');
console.log(`El nombre más largo es: ${nombreMasLargo}`);
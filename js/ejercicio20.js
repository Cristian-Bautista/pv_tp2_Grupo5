export const paisYcapital = {
  "--Selecciona un país--":"--Selecciona un país--",
  "Argentina": "Buenos Aires",
  "Brasil": "Brasilia",
  "Chile": "Santiago",
  "Colombia": "Bogotá",
  "México": "Ciudad de México",
  "Perú": "Lima"
  
};

const paises = document.getElementById('paise');
const capitales = document.getElementById('capitale');

for (const pais in paisYcapital) {
    const paisBuscar= document.createElement('option');
    paisBuscar.value = pais;
    paisBuscar.textContent = pais;
    paises.appendChild(paisBuscar);
}
paises.addEventListener('change', function () {
  const paisSeleccionado = this.value;
  const capitalBuscado = paisYcapital[paisSeleccionado];

  capitales.innerText = '';
  if (paisSeleccionado) {
    const capitalOption = document.createElement('option');
    capitalOption.value = capitalBuscado;
    capitalOption.textContent = capitalBuscado;
    capitales.appendChild(capitalOption);
  }
});

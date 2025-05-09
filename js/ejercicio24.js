const colores = ["#f10f0f","#33FF57","#0000ff","#ffff00","#ff00ff","5dc1b9"];
const boton = document.getElementById("cambiarColor");

boton.addEventListener("click", () => {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
    console.log(`Color de fondo cambiado a: ${colorAleatorio}`);
});
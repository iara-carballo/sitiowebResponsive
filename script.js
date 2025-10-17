

// Carrusel de texto
const textoCompleto = document.getElementById("info").innerText;
const oraciones = textoCompleto.split(".").map(t => t.trim()).filter(t => t.length > 0);

// Elegimos 3 frases aleatorias
const frasesAleatorias = [];
while (frasesAleatorias.length < 3 && oraciones.length > 0) {
  const randomIndex = Math.floor(Math.random() * oraciones.length);
  frasesAleatorias.push(oraciones.splice(randomIndex, 1)[0]);
}

const texto = document.querySelector(".carousel-text");
let i = 0;

// Mostrar la primera
texto.textContent = frasesAleatorias[i];

// Cambiar frase cada 8 segundos
setInterval(() => {
  i = (i + 1) % frasesAleatorias.length;
  texto.textContent = frasesAleatorias[i];
}, 8000);

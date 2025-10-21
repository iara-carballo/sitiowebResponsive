// === CARRUSEL DE TEXTO ===
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
texto.textContent = frasesAleatorias[i];

setInterval(() => {
  i = (i + 1) % frasesAleatorias.length;
  texto.textContent = frasesAleatorias[i];
}, 8000);

// === MENÚ HAMBURGUESA ===
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Cerrar menú al hacer clic fuera
window.addEventListener("click", (e) => {
  if (mobileMenu.classList.contains("active") &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)) {
    mobileMenu.classList.remove("active");
  }
});

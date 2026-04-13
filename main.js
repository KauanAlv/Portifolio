const imagens = document.querySelectorAll(".posts img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let zoomAtivo = false; // controla se já deu zoom

// Abrir lightbox
imagens.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = img.src;

    // reset
    zoomAtivo = false;
    lightboxImg.style.transform = "scale(1)";
  });
});

// Clique na imagem ampliada
lightboxImg.addEventListener("click", (e) => {
  e.stopPropagation(); // evita fechar

  if (!zoomAtivo) {
    lightboxImg.style.transform = "scale(1.5)";
    zoomAtivo = true;
  } else {
    // volta ao normal se clicar de novo (opcional 🔥)
    lightboxImg.style.transform = "scale(1)";
    zoomAtivo = false;
  }
});

// Clique fora = fecha
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// ESC fecha
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.remove("active");
  }
});
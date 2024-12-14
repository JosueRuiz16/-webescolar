// Obtenemos el botón de Carreras por su ID
const carrerasButton = document.getElementById("carrerasButton");

// Función para mostrar la alerta personalizada con dos botones
function mostrarAlerta() {
  // Creamos una ventana emergente usando la función confirm()
  const seleccion = confirm(
    "¿A qué carrera deseas acceder?\n\nSelecciona una opción:\n\n1. Turismo\n2. Agricultura"
  );

  // Validamos la opción seleccionada y redirigimos a la página correspondiente
  if (seleccion) {
    const opcion = prompt(
      "Ingresa el número de opción deseada (1 para Turismo, 2 para Agricultura):"
    );
    if (opcion === "1") {
      window.location.href = "turismp.html";
    } else if (opcion === "2") {
      window.location.href = "agricultura.html";
    } else {
      alert("Opción inválida");
    }
  }
}

// Agregamos un evento de clic al botón para mostrar la alerta
carrerasButton.addEventListener("click", mostrarAlerta);
// slider
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  let isAnimating = false;
  const slides = document.querySelectorAll(".slider li");
  const slideWidth = slides[0].clientWidth;
  const sliderContainer = document.querySelector(".slider ul");
  const sliderLeftButton = document.getElementById("slider-left");
  const sliderRightButton = document.getElementById("slider-right");

  function updateButtonVisibility() {
    sliderLeftButton.style.display = currentSlide === 0 ? "none" : "block";
    sliderRightButton.style.display =
      currentSlide === slides.length - 1 ? "none" : "block";
  }

  function slideToNext() {
    if (isAnimating || currentSlide === slides.length - 1) return;

    isAnimating = true;
    currentSlide++;

    sliderContainer.style.transition = "transform 1s ease-in-out";
    sliderContainer.style.transform = `translateX(-${
      slideWidth * currentSlide
    }px)`;

    setTimeout(function () {
      sliderContainer.style.transition = "";
      isAnimating = false;
    }, 1000);

    updateButtonVisibility();
  }

  function slideToPrev() {
    if (isAnimating || currentSlide === 0) return;

    isAnimating = true;
    currentSlide--;

    sliderContainer.style.transition = "transform 1s ease-in-out";
    sliderContainer.style.transform = `translateX(-${
      slideWidth * currentSlide
    }px)`;

    setTimeout(function () {
      sliderContainer.style.transition = "";
      isAnimating = false;
    }, 1000);

    updateButtonVisibility();
  }

  // Event listeners para los botones
  sliderLeftButton.addEventListener("click", function () {
    slideToPrev();
  });

  sliderRightButton.addEventListener("click", function () {
    slideToNext();
  });

  // Función para avanzar una imagen a la vez
  function slideOneByOne() {
    slideToPrev();
    if (currentSlide !== 0) {
      setTimeout(slideOneByOne, 1000);
    }
  }

  // Función para iniciar la animación al cargar la página
  function startAnimation() {
    setInterval(function () {
      slideToNext();
      if (currentSlide === slides.length - 1) {
        setTimeout(slideOneByOne, 1000); 
      }
    }, 5000);
  }

  updateButtonVisibility();
  startAnimation();
});

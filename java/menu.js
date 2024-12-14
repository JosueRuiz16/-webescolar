document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");

  menuButton.addEventListener("click", function () {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("mobile-menu-open");
  });
});
//  Script loader
// Ocultar el loader al cargar la página
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  // Oculta el loader con una transición
  loader.classList.add('hidden');
});

// Función para mostrar y ocultar el loader al cambiar de sección
function navigateToSection() {
  const loader = document.getElementById('loader');

  // Muestra el loader
  loader.classList.remove('hidden');

  setTimeout(() => {
    loader.classList.add('hidden');
  }, 30000); // Ajusta el tiempo según la carga real
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const menuLinks = document.querySelectorAll("nav ul li a");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
    console.log(menu.classList); // Überprüfen Sie, ob die Klasse "active" hinzugefügt/entfernt wird
  });

  for (let link of menuLinks) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });

      // Schließt das Menü nach einem Klick auf einen Link
      if (window.innerWidth <= 768) {
        menu.classList.remove("active");
      }
    });
  }
});

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("nav ul li a");

  for (let link of menuLinks) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });

      // Schließt das Menü nach einem Klick auf einen Link
      if (window.innerWidth <= 768) {
        menu.classList.remove("active");
      }
    });
  }
});

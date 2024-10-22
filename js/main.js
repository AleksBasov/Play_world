function burgerMenu(selector) {
  const menu = document.querySelector(selector);
  const button = menu.querySelector(".burger-menu_button");
  const links = menu.querySelectorAll(".burger-menu_link");
  const overlay = menu.querySelector(".burger-menu_overlay");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.forEach((link) => {
    link.addEventListener("click", () => toggleMenu());
  });

  overlay.addEventListener("click", () => toggleMenu());

  function toggleMenu() {
    menu.classList.toggle("burger-menu_active");

    if (menu.classList.contains("burger-menu_active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }
}

burgerMenu(".burger-menu");

// Gasp animate
const image = document.getElementById("image");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

function swing() {
  gsap.to(image, {
    rotation: 9,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  });

  gsap.to(image2, {
    y: -14,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  });
  gsap.to(image3, {
    y: -14,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  });
}

// Запускаем анимацию каждые 2 секунды
setInterval(swing, 2000);

// swiper

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

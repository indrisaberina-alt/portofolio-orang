
// ===================================
// SARA WIJAYANTO PORTFOLIO
// JAVASCRIPT
// ===================================


// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

  const isOpen =
    menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute(
    "aria-expanded",
    String(!isOpen)
  );

  navbar.classList.toggle("open", !isOpen);

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Buka menu" : "Tutup menu"
  );

});


// Menutup menu setelah salah satu navigasi diklik

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navbar.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute("aria-label", "Buka menu");

  });

});


// 2. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {

  revealObserver.observe(element);

});


// 3. ACTIVE NAVIGATION

const sections = document.querySelectorAll("main section[id]");

const sectionObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        navLinks.forEach(link => {

          link.classList.toggle(
            "active",
            link.getAttribute("href") ===
            "#" + entry.target.id
          );

        });

      }

    });

  },
  {
    rootMargin: "-35% 0px -55% 0px"
  }
);

sections.forEach(section => {

  sectionObserver.observe(section);

});


// 4. AUTOMATIC FOOTER YEAR

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// 5. CLOSE MENU WHEN CLICKING OUTSIDE

document.addEventListener("click", (event) => {

  const clickedInside =
    navbar.contains(event.target) ||
    menuToggle.contains(event.target);

  if (!clickedInside) {

    navbar.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

  }

});

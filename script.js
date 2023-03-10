const headerContainer = document.querySelector(".h--container");

const navToggle = document.querySelector(".mobile-nav-toogle");

const primaryNav = document.querySelector(".primary-nav");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  headerContainer.toggleAttribute("data-overlay");
});

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-navigation");
const navigationLinks = document.querySelectorAll(".main-navigation a");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const menuIsOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(menuIsOpen));
    menuButton.setAttribute(
      "aria-label",
      menuIsOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

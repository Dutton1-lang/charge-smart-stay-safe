
document.querySelectorAll(".faq-button").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isOpen = answer.classList.toggle("open");
    button.querySelector("span").textContent = isOpen ? "⌃" : "⌄";
  });
});

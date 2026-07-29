
const faqButtons = document.querySelectorAll(".faq-button");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.classList.toggle("open");

    const arrow = button.querySelector("span");
    arrow.textContent = answer.classList.contains("open") ? "⌃" : "⌄";
  });
});

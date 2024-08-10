// Select all the toggle buttons
const toggleButtons = document.querySelectorAll(".faq-toggle");

toggleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Find the corresponding text paragraph
    const text = button.closest(".faq").querySelector(".faq-text");
    const iconPlus = button.querySelector(".iconPlus");
    const iconMinus = button.querySelector(".iconMinus");

    // Toggle the hidden class on the text paragraph
    text.classList.toggle("hidden");

    // Toggle the icons
    iconPlus.classList.toggle("hidden");
    iconMinus.classList.toggle("hidden");
  });
});

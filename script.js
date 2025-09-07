// ----------------------
// Part 1: Event Handling
// ----------------------

// Dark mode toggle
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter button
let count = 0;
const counterBtn = document.getElementById("counter-btn");
const countDisplay = document.getElementById("count");

counterBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// ----------------------
// Part 2: Interactive FAQ
// ----------------------
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ----------------------
// Part 3: Form Validation
// ----------------------
const form = document.getElementById("register-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop page reload

  // Grab input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error message spans
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const successMessage = document.getElementById("form-success");

  let isValid = true;

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMessage.textContent = "";

  // Validate name
  if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters long.";
    isValid = false;
  }

  // Validate email with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Validate password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long.";
    isValid = false;
  }

  // If valid, show success
  if (isValid) {
    successMessage.textContent = "✅ Registration successful!";
    form.reset(); // clear fields
  }
});

const textElement = document.getElementById("dynamic-text");
const words = [
   "Frontend dasturlashga qiziqaman 💻",
   "Veb-dizayn bilan shug‘ullanaman 🎨",
   "Ijodkorman 🌟"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = words[wordIndex];
  const visible = isDeleting ? current.substring(0, charIndex--) : current.substring(0, charIndex++);
  textElement.innerHTML = visible;

  let delay = 100;
  if (!isDeleting && visible === current) {
    delay = 1200;
    isDeleting = true;
  } else if (isDeleting && visible === "") {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 400;
  }

  setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", typeEffect);

const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value;
  alert(`Rahmat, ${name}! Xabaringiz muvaffaqiyatli yuborildi ✅`);
  this.reset();
});

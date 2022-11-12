const aside = document.querySelector(".toggle-aside");
const btn = document.querySelector(".menu");
const asideBtn = document.querySelector(".btn-aside");
btn.addEventListener("click", () => {
  aside.classList.toggle("dis");
  console.log("clicked");
});
asideBtn.addEventListener("click", () => {
  aside.classList.toggle("dis");
});

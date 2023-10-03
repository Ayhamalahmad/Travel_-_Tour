let body = document.querySelector("body");
let themeTogler = document.querySelector(".theme-togler");
let themeToglerIcon = document.querySelector(".theme-togler .icon");
let themeToglerSpan = document.querySelector(".theme-togler span");
// Adding a click event listener to the theme toggle button
themeTogler.addEventListener("click", (e) => {
      // If the moon icon is present, switch to dark theme
  if (themeToglerIcon.classList.contains("fa-moon")) {
    body.setAttribute("data-bs-theme", "dark");
    themeToglerIcon.classList.remove("fa-moon");
    themeToglerIcon.classList.add("fa-sun");
    themeToglerSpan.textContent = "Light";
  } else {
      // If the sun icon is present, switch to light theme
    body.setAttribute("data-bs-theme", "light");
    themeToglerIcon.classList.remove("fa-sun");
    themeToglerIcon.classList.add("fa-moon");
    themeToglerSpan.textContent = "Dark";
  }
});

let goUp= document.querySelector('.go-up');
// Adding a scroll event listener to the window
window.addEventListener("scroll", () => {
  if (window.scrollY >= 1000) {
    goUp.classList.add("active");
  } else {
    goUp.classList.remove("active");
  }
});
let dropdownMenuItems = document.querySelectorAll(".dropdown-menu li");
let body = document.querySelector("body");

dropdownMenuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("dark")) {
      body.setAttribute('data-bs-theme','dark')
    } else if (e.target.classList.contains("light")) {
      body.setAttribute('data-bs-theme','light')
    } 
  });
});

  
    // dropdownMenuItems.forEach((item) => {
    //   item.addEventListener('click', () => {
    //     const selectedTheme = item.classList.contains('dark') ? 'dark' : 'light';
    //     document.documentElement.style.setProperty('--theme', selectedTheme);
    //   });
    // });

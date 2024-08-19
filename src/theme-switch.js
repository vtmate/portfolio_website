// Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
const nameDark = document.querySelector(".name-dark");
const nameLight = document.querySelector(".name-light");

// Github Logo
const githubLogo = document.getElementById("github_logo");
// const githubLogo2 = document.getElementById("github_logo2");

// Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia(" (prefers-color-scheme: dark)").matches;

// Icon Toggling
const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};

// Initial Theme Check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    nameLight.classList.add("display-none");
    githubLogo.setAttribute("fill", "#7D6590");
    // githubLogo2.setAttribute("fill", "#7D6590");
    return;
  }
  nameDark.classList.add("display-none");
  sunIcon.classList.add("display-none");
  githubLogo.setAttribute("fill", "#5D3E74");
  // githubLogo2.setAttribute("fill", "#5D3E74");
};

// Manual Theme Switch
const themeSwitch = () => {
  nameDark.classList.toggle("display-none");
  nameLight.classList.toggle("display-none");

  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

// call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
  themeSwitch();
  githubLogo.setAttribute("fill", "#5D3E74");
  // githubLogo2.setAttribute("fill", "#5D3E74");
});

moonIcon.addEventListener("click", () => {
  themeSwitch();
  githubLogo.setAttribute("fill", "#7D6590");
  // githubLogo2.setAttribute("fill", "#7D6590");
});

//invoke theme check on initial load
themeCheck();

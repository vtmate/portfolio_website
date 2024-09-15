// icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
const nameDark = document.querySelector(".name-dark");
const nameLight = document.querySelector(".name-light");
const nameDarkHun = document.querySelector(".name-dark-hun");
const nameLightHun = document.querySelector(".name-light-hun");
const lanSwitch = document.getElementById("lan-switch");

// github logo
const githubLogo = document.getElementById("github_logo");

// theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia(" (prefers-color-scheme: dark)").matches;

// icon Toggling
const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};

// initial Theme Check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    moonIcon.classList.add("display-none");
    githubLogo.setAttribute("fill", "#7D6590");
    introductionSwitch();
  } else {
    sunIcon.classList.add("display-none");
    localStorage.setItem("theme", "light");
    githubLogo.setAttribute("fill", "#5D3E74");
    introductionSwitch();
  }
};

// manual Theme Switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");

    iconToggle();
    introductionSwitch();
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    introductionSwitch();
    iconToggle();
  }
};

const introductionSwitch = () => {
  var en = (localStorage.getItem("language") || "en") === "en";
  var dark = localStorage.getItem("theme") === "dark";

  if (dark && en) {
    nameDark.classList.remove("display-none");
    nameLight.classList.add("display-none");
    nameDarkHun.classList.add("display-none");
    nameLightHun.classList.add("display-none");
  } else if (!dark && en) {
    nameDark.classList.add("display-none");
    nameLight.classList.remove("display-none");
    nameDarkHun.classList.add("display-none");
    nameLightHun.classList.add("display-none");
  } else if (dark && !en) {
    nameDark.classList.add("display-none");
    nameLight.classList.add("display-none");
    nameDarkHun.classList.remove("display-none");
    nameLightHun.classList.add("display-none");
  } else if (!dark && !en) {
    nameDark.classList.add("display-none");
    nameLight.classList.add("display-none");
    nameDarkHun.classList.add("display-none");
    nameLightHun.classList.remove("display-none");
  }
};

// call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
  themeSwitch();
  githubLogo.setAttribute("fill", "#5D3E74");
});

moonIcon.addEventListener("click", () => {
  themeSwitch();
  githubLogo.setAttribute("fill", "#7D6590");
});

lanSwitch.addEventListener("click", () => {
  introductionSwitch();
});

//invoke theme check on initial load
themeCheck();

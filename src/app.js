// adding the same opening and closing effect for all modals
const projectElements = {};
const projects = [
  "arcade",
  "wage",
  "bomberman",
  "cartographer",
  "jobhunter",
  "portfolio",
];

const overlay = document.getElementById("overlay");

projects.forEach((project) => {
  projectElements[`${project}Btn`] = document.getElementById(`${project}-btn`);
  projectElements[`${project}Modal`] = document.getElementById(
    `${project}-modal`,
  );
  projectElements[`${project}Close`] = document.getElementById(
    `${project}-close`,
  );
  projectElements[`${project}Content`] = document.getElementById(
    `${project}-content`,
  );
});

projects.forEach((project) => {
  const btn = projectElements[`${project}Btn`];
  const modal = projectElements[`${project}Modal`];
  const close = projectElements[`${project}Close`];
  const content = projectElements[`${project}Content`];

  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.toggle("h-0");
      modal.classList.toggle("h-[90%]");
      modal.classList.toggle("lg:h-[80%]");
      modal.classList.add("lg:p-8");
      modal.classList.add("p-4");
      modal.classList.add("pr-8");
    }, 10);
    setTimeout(() => {
      content.classList.toggle("opacity-0");
      content.classList.toggle("opacity-100");
    }, 200);
    overlay.classList.remove("invisible");
    overlay.classList.add("visible");
    overlay.classList.toggle("opacity-0");
    overlay.classList.toggle("opacity-50");
  });

  close.addEventListener("click", () => {
    content.classList.toggle("opacity-0");
    content.classList.toggle("opacity-100");
    setTimeout(() => {
      modal.classList.toggle("h-0");
      modal.classList.toggle("h-[90%]");
      modal.classList.toggle("lg:h-[80%]");
      modal.classList.remove("lg:p-8");
      modal.classList.remove("p-4");
      modal.classList.remove("pr-8");
    }, 100);
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300);
    overlay.classList.add("invisible");
    overlay.classList.remove("visible");
    overlay.classList.toggle("opacity-0");
    overlay.classList.toggle("opacity-50");
  });
});

// showing and hiding the certification image
document.getElementById("show-image-btn").addEventListener("click", () => {
  const imageContainer = document.getElementById("image-container");
  const arrow = document.getElementById("arrow");
  imageContainer.classList.toggle("hidden");
  arrow.classList.toggle("rotate-90");
  setTimeout(() => {
    imageContainer.classList.toggle("opacity-0");
  }, 10);
});

// hiding click me part after closing the modal
const clickMeClose = document.getElementById("arcade-close");
const clickMe = document.getElementById("click_me");

clickMeClose.addEventListener("click", () => {
  setTimeout(() => {
    clickMe.classList.add("opacity-0");
  }, 300);
});

// menu
document.getElementById("menu_button").addEventListener("change", function () {
  var menu = document.getElementById("menu");
  menu.classList.toggle("h-12");
  menu.classList.toggle("h-60");

  var themeButton = document.getElementById("theme_button");
  var lanButton = document.getElementById("lan_button");
  var githubButton = document.getElementById("github_button");
  var linkedinButton = document.getElementById("linkedin_button");

  if (this.checked) {
    setTimeout(() => {
      themeButton.classList.toggle("invisible");
      themeButton.classList.toggle("opacity-0");
      themeButton.classList.toggle("opacity-100");
    }, 100);

    setTimeout(() => {
      lanButton.classList.toggle("invisible");
      lanButton.classList.toggle("opacity-0");
      lanButton.classList.toggle("opacity-100");
    }, 150);

    setTimeout(() => {
      githubButton.classList.toggle("invisible");
      githubButton.classList.toggle("opacity-0");
      githubButton.classList.toggle("opacity-100");
    }, 200);

    setTimeout(() => {
      linkedinButton.classList.toggle("invisible");
      linkedinButton.classList.toggle("opacity-0");
      linkedinButton.classList.toggle("opacity-100");
    }, 250);
  } else {
    themeButton.classList.toggle("invisible");
    themeButton.classList.toggle("opacity-0");
    themeButton.classList.toggle("opacity-100");

    lanButton.classList.toggle("invisible");
    lanButton.classList.toggle("opacity-0");
    lanButton.classList.toggle("opacity-100");

    githubButton.classList.toggle("invisible");
    githubButton.classList.toggle("opacity-0");
    githubButton.classList.toggle("opacity-100");

    linkedinButton.classList.toggle("invisible");
    linkedinButton.classList.toggle("opacity-0");
    linkedinButton.classList.toggle("opacity-100");
  }
});

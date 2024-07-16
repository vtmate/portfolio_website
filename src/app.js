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
      modal.classList.toggle("h-40");
      modal.classList.add("p-4");
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
      modal.classList.toggle("h-40");
      modal.classList.remove("p-4");
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

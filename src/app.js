// const arcadeBtn = document.getElementById("arcade-btn");
// const arcadeModal = document.getElementById("arcade-modal");
// const arcadeClose = document.getElementById("arcade-close");

// const wageBtn = document.getElementById("wage-btn");
// const wageModal = document.getElementById("wage-modal");
// const wageClose = document.getElementById("wage-close");

// // const projects = ["arcade", "wage"];

// // projects.forEach((project) => {
// //   const project = document.getElementById(`${project}-btn`);
// // });

// arcadeBtn.addEventListener("click", () => {
//   arcadeModal.classList.remove("hidden");
// });

// arcadeClose.addEventListener("click", () => {
//   arcadeModal.classList.add("hidden");
// });

// wageBtn.addEventListener("click", () => {
//   wageModal.classList.remove("hidden");
// });

// wageClose.addEventListener("click", () => {
//   wageModal.classList.add("hidden");
// });

const projectElements = {};
const projects = ["arcade", "wage", "bomberman"];

const overlay = document.getElementById("overlay");

projects.forEach((project) => {
  projectElements[`${project}Btn`] = document.getElementById(`${project}-btn`);
  projectElements[`${project}Modal`] = document.getElementById(
    `${project}-modal`,
  );
  projectElements[`${project}Close`] = document.getElementById(
    `${project}-close`,
  );
});

projects.forEach((project) => {
  const btn = projectElements[`${project}Btn`];
  const modal = projectElements[`${project}Modal`];
  const close = projectElements[`${project}Close`];

  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.toggle("h-0");
    modal.classList.toggle("h-auto");
    // modal.classList.add("text-cube2");
    overlay.classList.remove("invisible");
    overlay.classList.add("visible");
    overlay.classList.toggle("opacity-0");
    overlay.classList.toggle("opacity-50");
  });

  close.addEventListener("click", () => {
    modal.classList.toggle("h-0");
    modal.classList.toggle("h-auto");
    modal.classList.add("hidden");
    overlay.classList.add("invisible");
    overlay.classList.remove("visible");
    overlay.classList.toggle("opacity-0");
    overlay.classList.toggle("opacity-50");
  });
});

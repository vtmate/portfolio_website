window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const cube1 = document.querySelector(".bg-cube1");
  const cube2 = document.querySelector(".bg-cube2");
  const cube3 = document.querySelector(".bg-cube3");
  const cube4 = document.querySelector(".bg-cube4");
  const cube5 = document.querySelector(".bg-cube5");
  const offset = scrollPosition * 0.02; // Adjust the multiplier to change the movement speed
  cube1.style.transform = `translateY(${offset}px)`;
  cube2.style.transform = `translateY(${-offset}px)`;
  cube3.style.transform = `translateY(${-offset}px)`;
  cube4.style.transform = `translateX(${-offset}px)`;
  cube5.style.transform = `translateX(${offset}px)`;
});

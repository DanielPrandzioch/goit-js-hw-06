function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector("body");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", () =>color.style.backgroundColor = getRandomHexColor());


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("ul#ingredients");
console.log(list);
const title = document.createElement("h2");
title.textContent = "Ingredients:";
list.before(title);
console.log(title);

const items = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
console.log(items);
list.innerHTML = items;





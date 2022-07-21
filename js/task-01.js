const numOfCategories = document.querySelectorAll('ul#categories>li').length;
console.log("NumOfCategories: ", numOfCategories);
const category = document.querySelectorAll("h2");
const elements = document.querySelectorAll(".item>ul");
for (let i = 0; i < numOfCategories; i++) {
    console.log("Category: ", category[i].textContent);
    console.log("Elements: ", elements[i].children.length);
} 

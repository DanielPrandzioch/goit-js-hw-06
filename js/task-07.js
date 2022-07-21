const inputSizeControl = document.querySelector("input#font-size-control");
const textSize = document.querySelector("span#text");

inputSizeControl.addEventListener("input", () => {
    for (let i = 16; i < 96; i++) {
        textSize.style.fontSize = inputSizeControl.value + "px";
    }
});
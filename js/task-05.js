const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (e) => {
    if (!e.target.value)
        outputName.textContent = "Anonymous";
    else
        
    outputName.textContent = e.target.value;
});


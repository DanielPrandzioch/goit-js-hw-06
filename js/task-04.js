let counterValue = 0;

const decrementListenerBtn = document.querySelector(
    '[data-action="decrement"]');
const incrementListenerBtn = document.querySelector(
	'[data-action="increment"]');

const counter = document.querySelector("span#value");
counter.textContent = `${counterValue}`;


const handleClickPlus = () =>  {
	counter.textContent = `${(counterValue += 1)}`;
};
const handleClickMinus = () => {
	counter.textContent = `${(counterValue -= 1)}`;
};

incrementListenerBtn.addEventListener ("click", handleClickPlus);


decrementListenerBtn.addEventListener("click", handleClickMinus);

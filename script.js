const btn = document.getElementById("btn");
const color = document.querySelector("color")

const numbers = "0123456789";
const alphabets = "abcdef";

function getRandomNumber() {
	return numbers[Math.floor(Math.random() * numbers.length)]
}
//console.log(getRandomNumber())

function getRandomAlphabet() {
	return alphabets[Math.floor(Math.random() * alphabets.length)]
}

console.log(getRandomNumber());
console.log(getRandomAlphabet());

function getRandom() {
	let arr = [];
	arr.push(getRandomNumber());
	arr.push(getRandomAlphabet());
	return arr[Math.floor(Math.random() * arr.length)]
}
btn.addEventListener("click", () => {
	let hex = "#"

	for(let i=0; i<6; i++){
		hex += getRandom()
	}

	document.body.style.backgroundColor = hex;
	color.textContent = hex;
});
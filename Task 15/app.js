let button = document.querySelector("button");

button.addEventListener("click", () => {
	document.getElementById("name").innerText =
		document.getElementById("nameInput").value;
});

let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");

red.addEventListener("click", () => {
	red.style.backgroundColor = "red";
});
green.addEventListener("click", () => {
	green.style.backgroundColor = "green";
});

blue.addEventListener("click", () => {
	blue.style.backgroundColor = "blue";
});

yellow.addEventListener("click", () => {
	yellow.style.backgroundColor = "yellow";
});

let services = [
	{
		name: "Dry Cleaning",
		price: 599,
		image:
			"https://plus.unsplash.com/premium_photo-1678304224523-d25b4117558f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsZWFuaW5nfGVufDB8fDB8fHww",
	},
	{
		name: "Ironing",
		price: 79,
		image:
			"https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fExlYXRoZXIlMjAlMjYlMjBTdWVkZSUyMENsZWFuaW5nfGVufDB8fDB8fHww",
	},
	{
		name: "Leather & Suede Cleaning",
		price: 999,
		image:
			"https://plus.unsplash.com/premium_photo-1661443428952-a093180e7b6c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGVhdGhlciUyMCUyNiUyMFN1ZWRlJTIwQ2xlYW5pbmd8ZW58MHx8MHx8fDA%3D",
	},
	{
		name: "Wedding Dress Cleaning",
		price: 899,
		image:
			"https://plus.unsplash.com/premium_photo-1683140539492-00601af84793?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlc3MlMjBkcnklMjBjbGVhbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		name: "Wash n Fold",
		price: 399,
		image:
			"https://images.unsplash.com/photo-1604762434310-c6def6a3d844?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJvbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		name: "Stain Removal",
		price: 499,
		image:
			"https://images.unsplash.com/photo-1624372635310-01d078c05dd9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D",
	},
];

let cart = [];
let add = document.getElementById("add");
let skip = document.getElementById("skip");
let idx = 0;
let num = 0;
let index = 0;

let book = document.querySelector(".btn-primary");
let validate = document.getElementById("validate");

function calculateTotal() {
	let total = 0;
	for (let i = 0; i < cart.length; i++) {
		total += cart[i].price;
	}
	return total;
}

function addItem() {
	try {
		if (idx >= services.length) {
			throw new Error("No more services available");
		}
		cart.push(services[idx]);

		updateCart(cart, index);
		index++;
		if (idx < services.length) {
			idx++;
		}
		renderServices(idx);
		validate.innerHTML = "";
	} catch (e) {
		console.log(e.message);
	}
}

const serial = () => {
	num++;
	return num;
};

function updateCart(cart, index) {
	let cartList = document.querySelector("#tbody");
	if (cartList.innerHTML.includes("No Items Added")) {
		cartList.innerHTML = "";
		cartList.classList.remove("empty");
		cartList.classList.add("contain");
	}
	let sno = document.createElement("div");
	sno.innerText = serial();
	let item = document.createElement("div");
	item.innerText = cart[index].name;
	let price = document.createElement("div");
	price.innerText = "₹" + cart[index].price + ".00";
	cartList.appendChild(sno);
	cartList.appendChild(item);
	cartList.appendChild(price);

	let total = document.getElementById("total");
	total.innerText = "₹ " + calculateTotal() + ".00";
}

function renderServices(idx) {
	let name = document.getElementById("s-name");
	let price = document.getElementById("amt");
	let image = document.getElementById("image");
	name.innerText = services[idx].name;
	price.innerText = "₹" + services[idx].price + ".00";
	image.src = services[idx].image;
}

document.addEventListener("DOMContentLoaded", () => {
	renderServices(idx);
});

add.addEventListener("click", () => {
	addItem();
});

skip.addEventListener("click", () => {
	try {
		if (idx >= services.length - 1) {
			throw new Error("No more services available");
		}
		idx++;
		renderServices(idx);
	} catch (e) {
		console.log(e.message);
	}
});

book.addEventListener("click", () => {
	let total = calculateTotal();
	if (total === 0) {
		validate.innerHTML =
			"<i class='fa-solid fa-circle-info'></i>Add items to the cart to book";
		validate.style.color = "rgb(200, 0, 0)";
	} else {
		validate.innerHTML =
			"<i class='fa-solid fa-circle-check'></i>Booking Successful";
		validate.style.color = "rgb(35, 155, 1)";
	}
});

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
});

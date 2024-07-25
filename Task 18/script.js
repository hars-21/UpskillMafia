// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map((number) => number * number);
// console.log(squaredNumbers);

// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

// function getGrade(score) {
// 	return score >= 90
// 		? "A"
// 		: score >= 80
// 		? "B"
// 		: score >= 70
// 		? "C"
// 		: score >= 60
// 		? "D"
// 		: "F";
// }
// console.log(getGrade(88));
// console.log(getGrade(77));
// console.log(getGrade(60));
// console.log(getGrade(45));

// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

// let car = {
// 	companyName: "Toyota",
// 	model: "Corolla",
// 	year: 2015,
// };

// function changeYear(car, newYear) {
// 	car.year = newYear;
// }

// changeYear(car, 2018);
// let { model, year } = car;
// console.log(model, year);

// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

// function isPrime(num) {
// 	if (num <= 1) return false;
// 	for (let i = 2; i <= Math.sqrt(num); i++) {
// 		if (num % i === 0) return false;
// 	}
// 	return true;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let primeNumbers = numbers.filter((number) => isPrime(number));
// console.log(primeNumbers);

// Q5 -  State different use cases of map, filter and reduce functions.

// let numbers = [1, 2, 3, 4, 5];

// let doubled = numbers.map((num) => num * 2);
// console.log(doubled);

// let evens = numbers.filter((num) => num % 2 === 0);
// console.log(evens);

// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);

// Q6 - Write an asynchronous function using async-await to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

// async function fetchData() {
// 	try {
// 		let response = await fetch("https://jsonplaceholder.typicode.com/posts");

// 		if (response.ok) {
// 			let data = await response.json();
// 			console.log(data);
// 		}
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// fetchData();

// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

let person = {
	name: "John Doe",
	address: "123 Main St",
	contact: {
		email: "john@doe.com",
	},
};

let phoneNumber = person.contact?.phone;

console.log(phoneNumber);

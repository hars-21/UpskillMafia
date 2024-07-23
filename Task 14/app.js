const divide = (num1, num2) => {
	return new Promise((resolve, reject) => {
		if (num2 === 0) {
			reject("Cannot divide by zero");
		} else {
			resolve(num1 / num2);
		}
	});
};

// Test cases
let testCases = [
	[10, 2],
	[20, 0],
	[30, 5],
	[50, 10],
	[15, 0],
];

testCases.forEach(([num1, num2]) => {
	divide(num1, num2)
		.then((result) => console.log(`Result: ${result}`))
		.catch((error) => console.log(`Error: ${error}`));
});

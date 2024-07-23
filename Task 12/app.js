let num = 153;
console.log(`The number is: ${num}`);

let dSum = 0;
let temp = num;
while (temp > 0) {
	let digit = temp % 10;
	dSum += digit;
	temp = Math.floor(temp / 10);
}
console.log(`The sum of the digits is: ${dSum}`);

let sum = 0;
let n = num;
for (let i = 0; i < num.toString().length; i++) {
	sum += Math.pow(n % 10, 3);
	n = Math.floor(n / 10);
}
console.log(
	sum === num
		? "The number is an Armstrong number."
		: "The number is not an Armstrong number."
);

let isPrime = true;
for (let i = 2; i < num; i++) {
	if (num % i === 0) {
		isPrime = false;
		break;
	}
}

console.log(`The number ${num} is ${isPrime ? "" : "not "}prime.`);

let factors = "";
for (let i = 1; i <= num; i++) {
	if (num % i === 0) {
		factors += i + ", ";
	}
}

console.log(`Factors: ${factors}`);

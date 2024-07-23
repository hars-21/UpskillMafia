let arr = [4, 8, 2, 11, 6, 7, 10];
console.log(`The array is: ${arr}`);

let max = 0;
for (let i = 0; i < arr.length; i++) {
	if (arr[i] > max) {
		max = arr[i];
	}
}
console.log(`The maximum number in the array is: ${max}`);

let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
}
console.log(`The sum of the array is: ${sum}`);

let count = 0;
for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 === 0) {
	} else {
		count += 1;
	}
}
console.log(`The number of odd numbers in the array is: ${count}`);

let P = 40000;
let r = 8;
let n = 1;
let t = 3;

const A = P * (1 + r / 100 / n) ** (n * t);

console.log(`The compound interest after ${t} years is: ${A}`);

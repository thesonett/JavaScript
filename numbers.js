let num1 = 2098990;
console.table([typeof num1, num1]);

// num1.toLocaleString() vs num1.toString()
console.log(num1.toString()); // Just plain conversion // 2098990
console.log(num1.toLocaleString("en-IN", { currency: "IND" })); // 20,98,990
// Adds things like commas, currency, language-based formatting and also you can pass options for formatting.

console.log(num1.toFixed(2)) // 2098990.00

num1 = 20.500
console.log(num1.toPrecision(2)) // 21
// give me 2 digits of meaningful value


const num2 = new Number(300)
console.table([typeof num2, num2.valueOf()]) // 'object' 300
console.log(typeof num2.valueOf()) // valueOf() is a built-in method that returns the primitive value of an object.


// Maths in js
console.log(Math.random())
console.log(Math.floor(Math.random() * 10 + 1))

console.log(Math.floor(24.9)) // 24 // towards down!
console.log(Math.ceil(24.4)) // 25 // towards up!

console.log(Math.round(24.4)) // 24 // rounds down!
console.log(Math.round(24.5)) // 25 // If the decimal is .5 or higher, it rounds up!
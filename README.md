# Learning JavaScript

## What is JavaScript?

- JavaScript is a high-level, interpreted programming language primarily used for web development to make websites interactive and dynamic.
- Multi-paradigm: functional & object-oriented style.
- Dynamically typed: Variable types are determined at runtime.
- Interpreted: Code is run line by line, without needing to compile.

## Is It Object Oriented or Prototype-based?

- ✅ JavaScript is prototype-based.
- In JavaScript, objects are created from other objects using prototypes. Every object can serve as a prototype for another object. Every object in JavaScript has an internal link to another object called its prototype. When you try to access a property or method on an object, JavaScript looks for it in the object. If not found, it looks up the prototype chain.
- But JS also has classes, introduced in ES6 (ECMAScript 2015) but this is just syntactic sugar over JavaScript's existing prototype-based inheritance. Under the hood, it's still using prototypes.
- JavaScript is object-oriented via prototype-based inheritance.

## var vs let vs const

- var: - function-scoped✅ not block-scoped❌ - Hoisted to the top of its scope. - not initialized (undefined by default) - re-declarable & updatable

```javascript
function person() {
  console.log(name); // undefined even with value
  var name = "Joy";
  var name = "sonett"; // re-declarable
  console.log(name); // undefined only if not assigned

  if (true) {
    var age = 23;
    console.log(`${name}: ${age}`);
  }

  console.log(age); // 23
}

console.log(name); // ReferenceError: name is not defined
person();
```

- let: - Blocked scoped (within {}) as well as function scoped✅ - Hoisted but not initialized (undefined by default) - updatable but not re-declarable in the same scope❌

```javascript
function person() {
  console.log(name); // ReferenceError: Cannot access 'name' before initialization
  let name = "Joy";
  let name = "sonett"; // not possible
  console.log(name); // undefined only if not assigned

  if (true) {
    let age = 23;
    console.log(`${name}: ${age}`);
  }

  console.log(age); // ReferenceError: age is not defined
}

console.log(name); // ReferenceError: name is not defined
person();
```

- const: - Blocked scoped (within {}) as well as function scoped✅ - Must be initialized at declaration. - Cannot be re-assigned❌ - Object properties or array elements can still be changed!

```javascript
const obj = { name: "John" };
obj.name = "Jane"; // ✅Allowed (mutation, not reassignment)

function person() {
    console.log(name) // ReferenceError: Cannot access 'name' before initialization
    name = 'sonett' // TypeError: Assignment to constant variable.
    const name; // SyntaxError: Missing initializer in const declaration
    const name = 'joy' // Must be initialized at declaration.
    console.log(name)

    if(true) {
        const age = 23
        console.log(`${name}: ${age}`)
    }

    console.log(age) // ReferenceError: age is not defined
}

console.log(name) // ReferenceError: name is not defined
person()
```

## Datatypes in JS

```js
console.log(typeof "Hello"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object**
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function
console.log(typeof NaN); // number

// Primitive(immutable & stored by value)
// String, Number, BigInt, Boolean, Null, Undefined, Symbol
let str = new String("hello");
let str2 = "hello";
console.log(typeof str); // object
console.log(typeof str2); // string
console.log(typeof Symbol(2344)); // symbol - Unique and immutable (used as object keys)
console.log(BigInt(2345674290433)); // bigint - For very large integers

// Non-Primitive (mutable and stored by reference)
// Object, Array, Function, Date, RegExp, etc.
console.log(typeof new Object({ name: "joy", age: 23 })); // object
console.log(typeof new Array()); // object
```

## Type Convertions in JS

```javascript
// Falsy values: false, 0, -0, 0n, '', null, undefined, NaN
// Truly values: 'hello', -1, 42, 3.14, [], {}, function(){}, Infinity

// converting to Number
let score = "33"; // 33
score = "33abc"; // NaN
score = null; // 0
score = NaN; // NaN
score = {}; // NaN
score = []; // 0 **
score = [10]; // 10
score = [10, 2, 4]; // NaN
score = undefined; // NaN

// converting to Boolean
score = "33"; // true
score = ""; // false **
score = null; // false
score = NaN; // false
score = {}; // true **
score = { name: "joy" }; // true
score = []; // true **
score = [10, 2, 4]; // true
score = undefined; // false **
score = 1; // true
score = 0; // false

// converting to String
score = 33; // '33'
score = null; // 'null'
score = NaN; // 'NaN'
score = {}; // '[object Object]'
score = []; // '' **
score = [10, 2, 4]; // '10, 2, 4'
score = undefined; // 'undefined'
```

## Weired Coercion in JS

```javascript
// type coercion:
// + operator is special—it triggers string concatenation if either operand is a string.
// -, *, /, etc. always convert to numbers.

console.log(2 + 2 + "3"); // '43'
console.log(2 + "3"); // '23'
console.log("2" + 2 + 2); // '222'
console.log("2" + 3); // '23'
console.log(2 + "3" + 2); // '232'
console.log(+"3" + 2); // 5

console.log(false + true); // 0 + 1 = 1
console.log(false - true); // 0 - 1 = -1
console.log(true + 1); // 1 + 1 = 2
console.log([] + []); // '' + '' = ''
console.log([] - []); // '' - '' -> 0 - 0 = 0
console.log([] + 1); // '' + 1 = '1'
console.log(1 + []); // 1 + '' = '1'
console.log({} + {}); // [object Object][object Object]
console.log({} + []); // [object Object]
console.log([] + {}); // [object Object]
console.log([] - 1); // '' -> 0 - 1 => -1
console.log([1] - 1); // [1] -> '1' -> 1 - 1 => 0
console.log(1 + NaN); // NaN
console.log(null + null); // 0 + 0 = 0

// more
console.log([1] + [2, 3]); // '1' + '2,3' => '12,3'
console.log([1] - [2, 3]); // '1' - '2, 3' -> 1 - NaN => NaN
console.log([] + null); // '' + null => 'null'
console.log([] - null); // '' - 0 -> 0 - 0 => 0
```

## Weired Comparisons in JS

```javascript
console.log(1 >= 1); // true
console.log(1 > 1); // false
console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 10); // true
console.log(2 >= 4); // false

console.log(null > 0); // 0 > 0 => false
console.log(null >= 0); // 0 >= 0 => true
// No coercion happens with === (strict equality)
console.log(null === null); // null === null => true
console.log(null === 0); // null === 0 => false

// Any comparison with NaN is always => false
console.log(undefined === undefined); // true
console.log(undefined === null); // false
console.log(undefined == null); // **special case => true
console.log(undefined > 0); // false

// >, >=, <=, < // they usually convert operands to numbers, except when both are strings!
console.log("5" > 2); // 5 > 2 => true
console.log("4" < "2"); // '4' < '2' => false
console.log("abc" > 5); // NaN > 5  => false
console.log("abc" >= "abc"); // true

// ==, === // Sometimes coerces to number, sometimes not — depends on the types!
console.log("2" == 2); // true (only value checking)
console.log("2" === 2); // false (both type & value checking)
```

## Stack and Heap Memory Allocation in JS
- Stack is for primitive datatypes. It gives us a copy of original value.
- Heap is for non-primitive datatypes. It gives us a reference to it's original values.
```javascript
// Stack
let email = 'sonett@gmail.com'
let anotherEmail = email // gives us a copy
anotherEmail = 'joy@google.com'

console.log(email) // still same
console.log(anotherEmail)

// Heap
let person = {
    name: 'joy saha',
    age: 23
}

let anotherPerson = person // gives reference
anotherPerson.name = 'sonett'

console.log(person) // changes
console.log(anotherPerson)
```

# Strings in js
```js
const name = 'Joy'
const age = 23

// String interpolation
console.log(`My name is: ${name.toUpperCase()} and I'm ${age} years old!`)

let gameName = new String('  Mario   ')
gameName = gameName.trim()

console.log(gameName[0]) // M
gameName[0] = 'J' // strings are immutable in js
console.log(gameName[0]) // still M

console.log(gameName.length)
console.log(gameName.__proto__)
console.log(gameName.trim())
console.log(gameName.charAt(1)) // a
console.log(gameName.indexOf('a')) // 1
console.log(gameName.split('')) // [ 'M', 'a', 'r', 'i', 'o' ]

const newString = gameName.substring(0, 3) // n to n-1
console.log(newString)

// if start is greater than end, .slice() returns an empty string. .slice accepts negative values
const anotherString = gameName.slice(-4, -2) // ar
console.log(anotherString)

const newStr = anotherString.replace('a', 'A') // Ar
console.log(newStr)

console.log(gameName.includes('jio')) // false
console.log('\n')

// string splicing
const myString = 'HelloWorld'
console.log(myString.slice(0 , myString.length))
console.log(myString.slice(2, -2)) // lloWor
console.log(myString.slice(5, myString.length)) // World
console.log(myString.slice(-5, myString.length)) // World
```

# Numbers in js
```js
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


const num2 = new Number(300) // object
console.table([typeof num2, num2.valueOf()]) // 'object' 300
console.log(typeof num2.valueOf()) // valueOf() is a built-in method that returns the primitive value of an object.


// Maths in js
console.log(Math.random())
console.log(Math.floor(Math.random() * 10 + 1))

console.log(Math.floor(24.9)) // 24 // towards down!
console.log(Math.ceil(24.4)) // 25 // towards up!

console.log(Math.round(24.4)) // 24 // rounds down!
console.log(Math.round(24.5)) // 25 // If the decimal is .5 or higher, it rounds up!
```

# Date in js
```js
const myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString()) // 4/19/2025, 1:37:59 PM
console.log(myDate.toLocaleString('default', {month: 'long', })) // April
console.log(myDate.toTimeString())

console.log(myDate.getTime()) // gives miliseconds
console.log(Math.floor(myDate.getTime() / 1000)) // seconds

// Timestamp: represents a specific date and time. It is often used to record when a particular event occurred.
console.log(Date.now()) // gives miliseconds


// Q. Print all the tuesdays from 2025 till now.
function allTheTuesdayDates() {
    const yearEndingDate = new Date('2025-12-31')
    const yearStartedDate = new Date('2025-01-01')
    const allTheTuesdayDates = []

    while(yearStartedDate <= yearEndingDate) {
        if(yearStartedDate.getDay() === 2) {
            allTheTuesdayDates.push(yearStartedDate.toLocaleDateString('en-IN'))
        }

        yearStartedDate.setDate(yearStartedDate.getDate() + 1)
    }

    allTheTuesdayDates.forEach((data)=> {
        console.log(data)
    })
}

allTheTuesdayDates()

// Q. How to manage dateTime for different location?
const utcDate = new Date()
console.log(utcDate.toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}))
console.log(utcDate.toLocaleString('en-AU', {timeZone: 'Australia/Sydney'}))

console.log(Intl.DateTimeFormat().resolvedOptions().timeZone); // This is how the app knows which user is in which time zone
```

# Arrays in js
```js
//1. JavaScript arrays are resizable and can contain a mix of different data types.
// 2. JavaScript arrays are not associative arrays. array elements cannot be accessed using arbitrary strings as indexes but only by non-negative integers as indexes.
// 3. JavaScript array-copy operations create shallow copies.

const nums = [1, 2, 3, 5, 'Joy Saha', {age: 23}]
nums.push(30.345) // adds into the last
nums.unshift([3, 4, 5]) // adds into first element
nums.shift() // removes first element
console.log(nums.length) // prints length

// slice vs splice
let newArr = nums.slice(0, 3); // its returns a new array without changing the original array
console.log(newArr) // [1, 2, 3]
console.log(nums) // doesn't change

newArr = nums.splice(0, 3) // it returns a new array + changes the original array!!
console.log(newArr) // [1, 2, 3]
console.log(nums) //  changes
console.log('\n')

// Array of strings
const fruit = 'Mango'
console.log(Array.isArray(fruit)) // false
console.log(Array.from(fruit)) // [ 'M', 'o', 'n', 'g', 'o' ] // object type
console.log(Array.of(fruit)) // ['Mango']


// merging multiple arrays
const marvel = ['Thor', 'Ironman', 'Captain']
const dc = ['Superman', 'Flash', 'Batman']

marvel.push(dc) // [ 'Thor', 'Ironman', 'Captain', [ 'Superman', 'Flash', 'Batman' ] ]
console.log(marvel.flat()) // flat make array one dimentional, not modifies the original array
newArr = [...marvel, ...dc] // [ 'Thor', 'Ironman', 'Captain', 'Superman', 'Flash', 'Batman' ]
newArr = marvel.concat(dc) // [ 'Thor', 'Ironman', 'Captain', 'Superman', 'Flash', 'Batman' ]
```
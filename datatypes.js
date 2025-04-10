console.log(typeof 'Hello')     // string
console.log(typeof 42)          // number
console.log(typeof true)        // boolean
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object**
console.log(typeof {})          // object
console.log(typeof [])          // object
console.log(typeof function(){}) // function
console.log(typeof NaN) // number

// Primitive(immutable & stored by value)	
// String, Number, BigInt, Boolean, Null, Undefined, Symbol
let str = new String('hello')
let str2 = 'hello'
console.log(typeof str) // object
console.log(typeof str2) // string
console.log(typeof Symbol(2344)) // symbol - Unique and immutable (used as object keys)
console.log(BigInt(2345674290433)) // bigint - For very large integers


// Non-Primitive (mutable and stored by reference)
// Object, Array, Function, Date, RegExp, etc.
console.log(typeof new Object({name: 'joy', age: 23})) // object
console.log(typeof new Array()) // object
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
- var: - function-scoped✅ not block-scoped❌
       - Hoisted to the top of its scope.
       - not initialized (undefined by default)
       - re-declarable & updatable
    
            function person() {
                console.log(name) // undefined even with value
                var name = 'Joy'
                var name = 'sonett' // re-declarable
                console.log(name) // undefined only if not assigned

                if(true) {
                    var age = 23
                    console.log(`${name}: ${age}`)
                }

                console.log(age) // 23
            }

            console.log(name) // ReferenceError: name is not defined
            person()
    
- let: - Blocked scoped (within {}) as well as function scoped✅
       - Hoisted but not initialized (undefined by default)
       - updatable but not re-declarable in the same scope❌
    
            function person() {
                console.log(name) // ReferenceError: Cannot access 'name' before initialization
                let name = 'Joy'
                let name = 'sonett' // not possible
                console.log(name) // undefined only if not assigned

                if(true) {
                    let age = 23
                    console.log(`${name}: ${age}`)
                }

                console.log(age) // ReferenceError: age is not defined
            }

            console.log(name) // ReferenceError: name is not defined
            person()
            
- const: - Blocked scoped (within {}) as well as function scoped✅
         - Must be initialized at declaration.
         - Cannot be re-assigned❌
         - Object properties or array elements can still be changed!
        
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

## Datatypes in JS
```js
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

```

## Type Convertions in JS
```javascript
// Falsy values: false, 0, -0, 0n, '', null, undefined, NaN
// Truly values: 'hello', -1, 42, 3.14, [], {}, function(){}, Infinity

// converting to Number
let score = '33' // 33
score = '33abc' // NaN
score = null // 0
score = NaN // NaN
score = {} // NaN
score = [] // 0 **
score = [10] // 10
score = [10, 2, 4] // NaN
score = undefined // NaN 

// converting to Boolean
score = '33' // true
score = '' // false **
score = null // false
score = NaN // false
score = {} // true **
score = {name: 'joy'} // true
score = [] // true **
score = [10, 2, 4] // true
score = undefined // false **
score = 1 // true
score = 0 // false

// converting to String
score = 33 // '33'
score = null // 'null'
score = NaN // 'NaN'
score = {} // '[object Object]'
score = [] // '' **
score = [10, 2, 4] // '10, 2, 4'
score = undefined // 'undefined'

```

## Weired Coercion in JS
```javascript
// type coercion:
// + operator is special—it triggers string concatenation if either operand is a string.
// -, *, /, etc. always convert to numbers.

console.log(2 + 2 + '3') // '43'
console.log(2 + '3') // '23'
console.log('2' + 2 + 2) // '222'
console.log('2' + 3) // '23'
console.log(2 + '3' + 2) // '232'
console.log(+('3') + 2 ) // 5

console.log(false + true) // 0 + 1 = 1
console.log(false - true) // 0 - 1 = -1
console.log(true + 1) // 1 + 1 = 2
console.log([] + []) // '' + '' = ''
console.log([] - []) // '' - '' -> 0 - 0 = 0
console.log([] + 1) // '' + 1 = '1'
console.log(1 + []) // 1 + '' = '1'
console.log({} + {}) // [object Object][object Object]
console.log({} + []) // [object Object]
console.log([] + {}) // [object Object]
console.log([] - 1) // '' -> 0 - 1 => -1
console.log([1] - 1) // [1] -> '1' -> 1 - 1 => 0
console.log(1 + NaN) // NaN
console.log(null + null) // 0 + 0 = 0

// more
console.log([1] + [2, 3]) // '1' + '2,3' => '12,3'
console.log([1] - [2, 3]) // '1' - '2, 3' -> 1 - NaN => NaN
console.log([] + null) // '' + null => 'null'
console.log([] - null) // '' - 0 -> 0 - 0 => 0
```
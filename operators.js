// Basic operators
console.log(2 + 2) // 4
console.log(2 * 9) // 18
console.log((7 / 9).toFixed(2)) // 0.7777 -> 0.78
console.log(7 % 9) // 7
console.log(2 ** 3) // 8

// comparisions
// NOTE: Always use strict types like !== & ===
console.log(2 != '2') // 2 != 2 -> false // '2' converts to number 2
console.log(2 !== '2') // true // checks both value and type. As type not same, that's why it's true


// nullish coalescing operator ??
let name = 'Sonett'
console.log(name ?? 'Joy') // if name is null or undefined, then print 'Joy'
console.log(null ?? undefined) // undefined
console.log(null ?? 'hello') // 'hello'
console.log('Joy' ?? 'Sonett') // 'Joy'
console.log(undefined ?? 'KK') // KK

// instanceof
class A {}
class B extends A {
    obj = {
       name: 'Joy',
       age: 23,
    }
}
class C {}
const objB = new B()
console.log(objB instanceof B) // true
console.log(objB instanceof A) // true // because B extends A
console.log(objB instanceof C) // false

// delete is only meant for object properties
console.log(objB.obj.name) // 'Joy'
delete objB.obj.name
console.log(objB.obj.name) // undefined!!

// in operator checks whether a property exists in an object
console.log('age' in objB.obj) // true

// spread operator
const nums = [1, 2, 3, 4, 6, [9, 10, 31, 12]]
const num2 = [...nums[5]] // shallow copy

console.log(num2) // [ 9, 10, 31, 12 ]
console.log(...num2) // 9 10 31 12

const newArr = [...nums.slice(0, 5), ...num2, [78, 43, 23]].flat()
for(let i in newArr) {
    console.log(newArr.join(','))
    break
}
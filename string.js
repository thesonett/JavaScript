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
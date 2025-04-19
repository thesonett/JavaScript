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
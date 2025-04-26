// for...in → for objects
// for...of → for iterables like Map, Set, Array, etc.

// Arrays
const nums = [1, 2, 3, 4, 5, 6]
for(const index in nums) { // It works, because behind the scene, js arrays are objects!
    console.log(index, ' ', nums[index])
}

for(const val of nums) {
    console.log(val)
}

// Objects
const User = {
    name: 'Joy',
    age: 23,
    profession: 'engineer',
    city: 'kolkata',
    phoneNumber: [9073525312, 9836632842],
}

for(const key in User) {
    console.log(key, ':', User[key])
}

// not gonna work as objects are not iterable
// for(const {key, value} of User) {
//     console.log(key, '', value)
// }


// Map
const map = new Map()
map.set('js', 'javascript')
map.set('cpp', 'C++')
map.set('py', 'Python')

// ap is not an object with enumerable properties, so for...in skips it entirely.
for(const i in map) {   
    console.log(i) // prints nothing!
}

// works!
for(const [i, val] of map) { // maps are iterable like arrays, set etc
    console.log(i, ':', val)
}
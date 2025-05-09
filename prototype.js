function multiplyBy5(num) {
    return num * 5
}

multiplyBy5.power = 2

console.log(multiplyBy5(4))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)
console.log('\n')

// example 2 
function user (username, age) {
    this.username = username
    this.age = age
}

user.prototype.increment = function() {
    this.age++
}

const user_1 = new user('Joy', 23)
user_1.increment()
console.log(user_1)
console.log('\n')

// example 3
// Array, Function, String ----> Object -----> null
const myHeros = ['thor', 'ironman']
const myObj = {
    username: 'Joy',
    age: 23
}

Object.prototype.heyJoy = function() {
    console.log('Hey joy!!!')
}

Array.prototype.printMe = function() {
    console.log('Perfect array!')
}

myHeros.heyJoy()
myHeros.printMe()

myObj.heyJoy()
// myObj.printMe() // TypeError: myObj.printMe is not a function
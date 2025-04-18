// Stack vs Heap Memory

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
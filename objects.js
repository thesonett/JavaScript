function printInfo({name, age, ...props}) {
    console.table([name, age])
    console.log(props)
    
    increaseAge({age, ...props})
}

function increaseAge({age, ...props}) {
    // age = Number(age) // not gonna work as Symbol is a unique and immutable primitive, meant only for identity
    age = Number(age.description)
    age += 5
    console.log('New age: ', age)
    console.log(props)
}

const obj = new Object() // singleton object
// object literals
const loggedTime = Symbol()

const JsUser = {
    name: 'Sonett',
    "full name": 'Joy Saha',
    age: Symbol(25),
    isLoggedIn: false,
    [loggedTime]: 'key-time' // Symbol type data
}

console.log(JsUser.age)
console.log(JsUser["full name"])

console.log(JsUser.loggedTime) // not gonna work!
console.log(JsUser[loggedTime]) // right way to print symbol

printInfo(JsUser)
console.log('\n')

// example - 2
Object.freeze(JsUser) // It will let you not to change any data
JsUser.age = 80
console.log(JsUser) // still age 25!


console.log(Object.keys(JsUser))
console.log(Object.values(JsUser))
console.log(Object.entries(JsUser))

for(const [key, value] of Object.entries(JsUser)) {
    console.log(key, ":", value)
}

// example - 3
let newObj = Object.assign({}, JsUser) // old way
newObj = {...JsUser} // modern way
newObj.name = 'Priya'
delete newObj['full name']
console.log(newObj)
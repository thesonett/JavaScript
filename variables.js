// var
function person() {
    console.log(name) // undefined even with value
    var name = 'Joy'
    console.log(name) // undefined only if not assigned

    if(true) {
        var age = 23
        console.log(`${name}: ${age}`)
    }

    console.log(age) // 23
}

// console.log(name) // ReferenceError: name is not defined
person(); console.log('\n')


// let
function person2() {
    // console.log(name) // ReferenceError: Cannot access 'name' before initialization
    let name = 'Joy'
    console.log(name) // undefined only if not assigned

    if(true) {
        let age = 23
        console.log(`${name}: ${age}`)
    }

    // console.log(age) // ReferenceError: age is not defined
}

// console.log(name) // ReferenceError: name is not defined
person2(); console.log('\n')


// const
function person3() {
    // console.log(name) // ReferenceError: Cannot access 'name' before initialization
    // name = 'sonett' // TypeError: Assignment to constant variable.
    // const name; // SyntaxError: Missing initializer in const declaration
    const name = 'joy' // Must be initialized at declaration.
    console.log(name)

    if(true) {
        const age = 23
        console.log(`${name}: ${age}`)
    }

    // console.log(age) // ReferenceError: age is not defined
}

// console.log(name) // ReferenceError: name is not defined
person3()

// experiments

function fun() {
    if(1) {
        let myName = 'sonett'
    }

    let myName = 'joy'
    console.log(myName)
}
fun()
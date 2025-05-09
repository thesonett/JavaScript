// Q. bind() vs call()
// call(this, args) ➔ immediately calls the function with a specific this.
// bind(this, args) ➔ returns a new function with this bound, but does not call it immediately. You have to manually invoke it later.


function setusername(username) {
    this.username = username
}

function createUser(username, age) {
    setusername.call(this, username) // by call
    // const bindUsername = setusername.bind(this, username) // by bind
    // bindUsername()

    // or
    setusername.bind(this, username)()
    this.age = age
}

const user = new createUser('Joy', 25)
console.log(user)
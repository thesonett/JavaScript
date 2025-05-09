// JavaScript does not support traditional method overloading. you cannot define two methods with the same name.
//  JavaScript does not support constructor overloading.
// 


class User {
    username
    email
    password

    // constructor() {} // JavaScript does not support constructor overloading

    constructor(username = '', email = '', password = '') {
        this.username = username
        this.email = email
        this.password = password

        console.log('User called')
    }

    printInfo() {
        console.log(`${this.username}, ${this.email}, ${this.password}`)
    }

    static userid() {
        return '101'
    }
}

const user = new User('Joy', 'joy@gmail.com', '123')
const user_2 = new User()

console.log(user)
console.log(user_2)

class User2 extends User {
    constructor(username, email) {
        console.log('Special called')
        super(username, email)
    }
}

const user2 = new User2('sonett', 'sonett@gmail.com')
user2.printInfo()

console.log(User.userid())
console.log(User2.userid())


// behind the scene
// function User(username = '', email = '', password = '') {
//     this.username = username
//     this.email = email
//     this.password = password
// }

// function User2(username, email, password) {
//     User.call(this, username, email, password)
// }

// Object.setPrototypeOf(User2.prototype, User.prototype)

// User.prototype.printInfo = function() {
//     console.log(`${this.username}, ${this.email}, ${this.password}`)
// }


// const user = new User('Joy', 'joy@gmail.com', '123')
// const user2 = new User2()

// user.printInfo()
// user2.printInfo()

console.log(user instanceof User) // true
console.log(user2 instanceof User) // true
console.log(user instanceof User2) // false
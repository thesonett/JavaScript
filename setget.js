class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email
    }

    set email(email) {
        this._email = email
    }
}

const user = new User('joy@gmail.com', '123')
console.log(user.email)
user.email = 'sonett@gmail.com' // TypeError: Cannot set property email of #<User> which has only a getter
console.log(user.email)

const tea = Object.create(user) // shallow copy
console.log(tea.email)
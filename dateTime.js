// Q. How to manage dateTime for different location?
// Q. Print all the tuesdays from 2025 till now.


// console.log(new Date())

// let data = new Date().toLocaleString().split(',')
// console.log(data[0], '---', data[1])

// console.log(new Date().toLocaleDateString())
// console.log(new Date().toLocaleTimeString())
// console.log(new Date().toISOString())


function allTheTuesdayDates() {
    const today = new Date()
    const yearStartedDate = new Date('2025-01-01')
    const allTheTuesdayDates = []

    while(yearStartedDate <= today) {
        if(yearStartedDate.getDay() === 2) {
            allTheTuesdayDates.push(yearStartedDate.toLocaleDateString('en-IN'))
        }

        yearStartedDate.setDate(yearStartedDate.getDate() + 1)
    }

    allTheTuesdayDates.forEach((data)=> {
        console.log(data)
    })
}

allTheTuesdayDates()

const utcDate = new Date()
console.log(utcDate.toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}))
console.log(utcDate.toLocaleString('en-AU', {timeZone: 'Australia/Sydney'}))

console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
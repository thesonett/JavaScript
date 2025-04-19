const myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString()) // 4/19/2025, 1:37:59 PM
console.log(myDate.toLocaleString('default', {month: 'long', })) // April
console.log(myDate.toTimeString())

console.log(myDate.getTime()) // gives miliseconds
console.log(Math.floor(myDate.getTime() / 1000)) // seconds

// Timestamp: represents a specific date and time. It is often used to record when a particular event occurred.
console.log(Date.now()) // gives miliseconds


// Q. Print all the tuesdays from 2025 till now.
function allTheTuesdayDates() {
    const yearEndingDate = new Date('2025-12-31')
    const yearStartedDate = new Date('2025-01-01')
    const allTheTuesdayDates = []

    while(yearStartedDate <= yearEndingDate) {
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

// Q. How to manage dateTime for different location?
const utcDate = new Date()
console.log(utcDate.toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}))
console.log(utcDate.toLocaleString('en-AU', {timeZone: 'Australia/Sydney'}))

console.log(Intl.DateTimeFormat().resolvedOptions().timeZone); // This is how the app knows which user is in which time zone
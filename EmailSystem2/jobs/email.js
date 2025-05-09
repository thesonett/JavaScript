const mailer = require('nodemailer')

const employeeDetails = [
    { name: "Sonett", email: "sonettjsaha@gmail.com", dob: "1999-05-02" },
    { name: "Joy", email: "joysaha9882@gmail.com", dob: "1997-05-02" },
    { name: "Priya", email: "priya@gmail.com", dob: "2001-05-03" },
    { name: "Sahil", email: "sahil@gmail.com", dob: "1991-05-03" },
    { name: "Ankita", email: "ankita@gmail.com", dob: "1985-05-25" },
];

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Joy Saha',
        pass: 'woqosigncqqlqxwe'
    }
})

function getAllBirthdayEmployees() {
    const today = new Date().toISOString().split('T')[0].split('-')
    const month = today[1]
    const day = today[2]
    
    const employees = employeeDetails.filter((item) => 
        item.dob.split('-')[1] === month && item.dob.split('-')[2] === day
    )
    
    return employees
}

const filteredEmployees = getAllBirthdayEmployees()

function sendEmail() {
    transporter.sendMail({
        from: 'joys0178000@gmail.com',
        to: (filteredEmployees.map((item) => item.email)).join(','),
        subject: '🎉 Happy Birthday Darling!',
        text: 'Wish you a very happy birthday. May your all wishes come true!! Enjoy your day :D'
    }, (error, info) => {
        if(error) {
            console.log(error)
            console.log('Mail is not sent due to some error!!')
        }
        else {
            console.log(info.response)
            console.log('Email sent!!')
        }
    })
}

sendEmail()